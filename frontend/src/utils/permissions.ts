import { Task } from "../types/task";
import { AuthUser } from "../types/auth";

export const canEditTask = (task: Task, user: AuthUser | null): boolean => {
  if (!user) return false;

  const isAdmin = user.roles.includes("admin");
  const isManager = user.roles.includes("manager");
  const isOwner = task.owner.id === user.id;

  return isAdmin || isManager || isOwner;
};

export const canDeleteTask = (task: Task, user: AuthUser | null): boolean => {
  if (!user) return false;

  const isAdmin = user.roles.includes("admin");
  const isOwner = task.owner.id === user.id;

  return isAdmin || isOwner;
};
