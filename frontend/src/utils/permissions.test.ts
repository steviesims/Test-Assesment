import { describe, it, expect } from "vitest";
import { canEditTask, canDeleteTask } from "./permissions";
import { Task } from "../types/task";
import { AuthUser } from "../types/auth";

// Mock data helpers
const createMockUser = (
  id: string,
  roles: Array<"admin" | "manager" | "user">
): AuthUser => ({
  id,
  email: `${id}@test.com`,
  firstName: "Test",
  lastName: "User",
  roles,
});

const createMockTask = (ownerId: string): Task => ({
  id: "task-1",
  title: "Test Task",
  description: "Test Description",
  status: "todo",
  owner: {
    id: ownerId,
    email: "owner@test.com",
    firstName: "Owner",
    lastName: "User",
  },
  assignees: [],
  attachments: [],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});

describe("canEditTask", () => {
  it("should return false when user is null", () => {
    const task = createMockTask("owner-1");
    expect(canEditTask(task, null)).toBe(false);
  });

  describe("Admin role", () => {
    it("should allow admin to edit any task", () => {
      const admin = createMockUser("admin-1", ["admin"]);
      const task = createMockTask("owner-1");
      expect(canEditTask(task, admin)).toBe(true);
    });

    it("should allow admin to edit their own task", () => {
      const admin = createMockUser("admin-1", ["admin"]);
      const task = createMockTask("admin-1");
      expect(canEditTask(task, admin)).toBe(true);
    });
  });

  describe("Manager role", () => {
    it("should allow manager to edit any task", () => {
      const manager = createMockUser("manager-1", ["manager"]);
      const task = createMockTask("owner-1");
      expect(canEditTask(task, manager)).toBe(true);
    });

    it("should allow manager to edit their own task", () => {
      const manager = createMockUser("manager-1", ["manager"]);
      const task = createMockTask("manager-1");
      expect(canEditTask(task, manager)).toBe(true);
    });
  });

  describe("Regular user role", () => {
    it("should allow regular user to edit their own task", () => {
      const user = createMockUser("user-1", ["user"]);
      const task = createMockTask("user-1");
      expect(canEditTask(task, user)).toBe(true);
    });

    it("shouldn't allow regular user to edit someone else's task", () => {
      const user = createMockUser("user-1", ["user"]);
      const task = createMockTask("owner-1");
      expect(canEditTask(task, user)).toBe(false);
    });
  });
});

describe("canDeleteTask", () => {
  it("should return false when user is null", () => {
    const task = createMockTask("owner-1");
    expect(canDeleteTask(task, null)).toBe(false);
  });

  describe("Admin role", () => {
    it("should allow admin to delete any task", () => {
      const admin = createMockUser("admin-1", ["admin"]);
      const task = createMockTask("owner-1");
      expect(canDeleteTask(task, admin)).toBe(true);
    });

    it("should allow admin to delete their own task", () => {
      const admin = createMockUser("admin-1", ["admin"]);
      const task = createMockTask("admin-1");
      expect(canDeleteTask(task, admin)).toBe(true);
    });
  });

  describe("Manager role", () => {
    it("shouldn't allow manager to delete someone else's task", () => {
      const manager = createMockUser("manager-1", ["manager"]);
      const task = createMockTask("owner-1");
      expect(canDeleteTask(task, manager)).toBe(false);
    });

    it("should allow manager to delete their own task", () => {
      const manager = createMockUser("manager-1", ["manager"]);
      const task = createMockTask("manager-1");
      expect(canDeleteTask(task, manager)).toBe(true);
    });
  });

  describe("Regular user role", () => {
    it("should allow regular user to delete their own task", () => {
      const user = createMockUser("user-1", ["user"]);
      const task = createMockTask("user-1");
      expect(canDeleteTask(task, user)).toBe(true);
    });

    it("shouldn't allow regular user to delete someone else's task", () => {
      const user = createMockUser("user-1", ["user"]);
      const task = createMockTask("owner-1");
      expect(canDeleteTask(task, user)).toBe(false);
    });
  });
});
