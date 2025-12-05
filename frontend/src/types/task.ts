import { AuthUser } from "./auth";

export type TaskStatus = "todo" | "in_progress" | "done";

export type TaskAttachment = {
  id: string;
  filename: string;
  mimetype: string;
  path: string;
};

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  owner: AuthUser;
  assignees: AuthUser[];
  attachments: TaskAttachment[];
  createdAt: string;
  updatedAt: string;
};

export type TaskInput = {
  title: string;
  description?: string;
  status?: TaskStatus;
  assigneeIds?: string[];
};

export type PaginationMeta = {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  limit: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type PaginatedResponse<T> = {
  data: T[];
  pagination: PaginationMeta;
};

export type SortField = "createdAt" | "title" | "status";
export type SortOrder = "ASC" | "DESC";

export type FetchTasksParams = {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
  assigneeId?: string;
  myTasks?: boolean;
  sortBy?: SortField;
  sortOrder?: SortOrder;
};

export type TaskFilterOptions = {
  query?: string;
  status?: TaskStatus[];
  assigneeIds?: string;
  showMyTask?: boolean;
  sortBy?: SortField;
  sortOrder?: SortOrder;
};
