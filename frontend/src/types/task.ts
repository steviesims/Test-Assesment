import { AuthUser } from './auth';

export type TaskStatus = 'todo' | 'in_progress' | 'done';

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

