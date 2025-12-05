import { apiClient } from './client';
import { Task, TaskInput, PaginatedResponse } from '../types/task';

export type FetchTasksParams = {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
  assigneeId?: string;
};

export const fetchTasks = async (params: FetchTasksParams = {}): Promise<PaginatedResponse<Task>> => {
  const { page = 1, limit = 10, search, status, assigneeId } = params;

  const queryParams: Record<string, string | number> = { page, limit };

  if (search) queryParams.search = search;
  if (status) queryParams.status = status;
  if (assigneeId) queryParams.assigneeId = assigneeId;

  const { data } = await apiClient.get<PaginatedResponse<Task>>('/tasks', {
    params: queryParams
  });
  return data;
};

export const createTask = async (payload: TaskInput): Promise<Task> => {
  const { data } = await apiClient.post<Task>('/tasks', payload);
  return data;
};

export const updateTask = async (id: string, payload: TaskInput): Promise<Task> => {
  const { data } = await apiClient.put<Task>(`/tasks/${id}`, payload);
  return data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await apiClient.delete(`/tasks/${id}`);
};

