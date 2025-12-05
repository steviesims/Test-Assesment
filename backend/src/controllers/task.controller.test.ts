import { Request, Response } from "express";
import { TaskController } from "./task.controller";
import { AppDataSource } from "../config/data-source";
import { Task } from "../entities/Task";
import { User } from "../entities/User";

// Mock TypeORM repositories
jest.mock("../config/data-source", () => ({
  AppDataSource: {
    getRepository: jest.fn(),
  },
}));

describe("TaskController Permission Tests", () => {
  let taskController: TaskController;
  let mockTaskRepository: any;
  let mockUserRepository: any;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  const adminUser = {
    id: "admin-1",
    email: "admin@test.com",
    firstName: "Admin",
    lastName: "User",
    roles: [{ id: "role-1", name: "admin" }],
  } as User;

  const managerUser = {
    id: "manager-1",
    email: "manager@test.com",
    firstName: "Manager",
    lastName: "User",
    roles: [{ id: "role-2", name: "manager" }],
  } as User;

  const regularUser = {
    id: "user-1",
    email: "user@test.com",
    firstName: "Regular",
    lastName: "User",
    roles: [{ id: "role-3", name: "user" }],
  } as User;

  const taskOwner = {
    id: "owner-1",
    email: "owner@test.com",
    firstName: "Task",
    lastName: "Owner",
    roles: [{ id: "role-3", name: "user" }],
  } as User;

  const mockTask = {
    id: "task-1",
    title: "Test Task",
    description: "Test Description",
    status: "todo",
    owner: taskOwner,
    assignees: [],
    attachments: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  } as Task;

  beforeEach(() => {
    jest.clearAllMocks();

    mockTaskRepository = {
      findOne: jest.fn(),
      save: jest.fn(),
      remove: jest.fn(),
    };

    mockUserRepository = {
      findOne: jest.fn(),
    };

    (AppDataSource.getRepository as jest.Mock).mockImplementation((entity) => {
      if (entity === Task) return mockTaskRepository;
      if (entity === User) return mockUserRepository;
      return {};
    });

    taskController = new TaskController();

    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };

    mockRequest = {
      params: { id: "task-1" },
      body: { title: "Updated Title" },
      user: undefined,
    };
  });

  describe("edit feature tests", () => {
    beforeEach(() => {
      mockTaskRepository.findOne.mockResolvedValue(mockTask);
      mockTaskRepository.save.mockResolvedValue(mockTask);
    });

    it("should allow admin to update any task", async () => {
      mockRequest.user = { userId: adminUser.id, roles: ["admin"] };
      mockUserRepository.findOne.mockResolvedValue(adminUser);

      await taskController.update(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockTaskRepository.save).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalledWith(mockTask);
    });

    it("should allow manager to update any task", async () => {
      mockRequest.user = { userId: managerUser.id, roles: ["manager"] };
      mockUserRepository.findOne.mockResolvedValue(managerUser);

      await taskController.update(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockTaskRepository.save).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalledWith(mockTask);
    });

    it("should allow task owner to update their own task", async () => {
      mockRequest.user = { userId: taskOwner.id, roles: ["user"] };
      mockUserRepository.findOne.mockResolvedValue(taskOwner);

      await taskController.update(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockTaskRepository.save).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalledWith(mockTask);
    });

    it("shouldn't allow regular user to update any task", async () => {
      mockRequest.user = { userId: regularUser.id, roles: ["user"] };
      mockUserRepository.findOne.mockResolvedValue(regularUser);

      await taskController.update(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockTaskRepository.save).not.toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(403);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "You don't have permission to edit this task",
      });
    });

    it("should return 401 if user is not authenticated", async () => {
      mockRequest.user = undefined;

      await taskController.update(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Unauthorized",
      });
    });

    it("should return 404 if task does not exist", async () => {
      mockRequest.user = { userId: adminUser.id, roles: ["admin"] };
      mockTaskRepository.findOne.mockResolvedValue(null);

      await taskController.update(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Task not found",
      });
    });
  });

  describe("delete feature tests", () => {
    beforeEach(() => {
      mockTaskRepository.findOne.mockResolvedValue(mockTask);
      mockTaskRepository.remove.mockResolvedValue(mockTask);
    });

    it("should allow admin to delete any task", async () => {
      mockRequest.user = { userId: adminUser.id };
      mockUserRepository.findOne.mockResolvedValue(adminUser);

      await taskController.remove(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockTaskRepository.remove).toHaveBeenCalledWith(mockTask);
      expect(mockResponse.status).toHaveBeenCalledWith(204);
      expect(mockResponse.send).toHaveBeenCalled();
    });

    it("should allow task owner to delete their own task", async () => {
      mockRequest.user = { userId: taskOwner.id, roles: ["user"] };
      mockUserRepository.findOne.mockResolvedValue(taskOwner);

      await taskController.remove(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockTaskRepository.remove).toHaveBeenCalledWith(mockTask);
      expect(mockResponse.status).toHaveBeenCalledWith(204);
      expect(mockResponse.send).toHaveBeenCalled();
    });

    it("should allow manager to delete their own task", async () => {
      const managerOwnedTask = {
        ...mockTask,
        owner: managerUser,
      };
      mockTaskRepository.findOne.mockResolvedValue(managerOwnedTask);
      mockRequest.user = { userId: managerUser.id, roles: ["manager"] };
      mockUserRepository.findOne.mockResolvedValue(managerUser);

      await taskController.remove(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockTaskRepository.remove).toHaveBeenCalledWith(managerOwnedTask);
      expect(mockResponse.status).toHaveBeenCalledWith(204);
      expect(mockResponse.send).toHaveBeenCalled();
    });

    it("shouldn't allow manager to delete any task", async () => {
      mockRequest.user = { userId: managerUser.id, roles: ["manager"] };
      mockUserRepository.findOne.mockResolvedValue(managerUser);

      await taskController.remove(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockTaskRepository.remove).not.toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(403);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "You don't have permission to delete this task",
      });
    });

    it("shouldn't allow regular user to delete any task", async () => {
      mockRequest.user = { userId: regularUser.id };
      mockUserRepository.findOne.mockResolvedValue(regularUser);

      await taskController.remove(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockTaskRepository.remove).not.toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(403);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "You don't have permission to delete this task",
      });
    });

    it("should return 401 if user is not authenticated", async () => {
      mockRequest.user = undefined;

      await taskController.remove(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Unauthorized",
      });
    });

    it("should return 404 if task does not exist", async () => {
      mockRequest.user = { userId: adminUser.id, roles: ["admin"] };
      mockTaskRepository.findOne.mockResolvedValue(null);

      await taskController.remove(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Task not found",
      });
    });
  });
});
