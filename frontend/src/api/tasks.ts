import { apiClient } from './client';
import {
  Task,
  TaskInput,
  PaginatedResponse,
  FetchTasksParams
} from '../types/task';

export const fetchTasks = async (params: FetchTasksParams = {}): Promise<PaginatedResponse<Task>> => {
  const { page = 1, limit = 10, search, status, assigneeId, myTasks, sortBy, sortOrder } = params;

  const queryParams: Record<string, string | number | boolean> = { page, limit };

  if (search) queryParams.search = search;
  if (status) queryParams.status = status;
  if (assigneeId) queryParams.assigneeId = assigneeId;
  if (myTasks !== undefined) queryParams.myTasks = myTasks;
  if (sortBy) queryParams.sortBy = sortBy;
  if (sortOrder) queryParams.sortOrder = sortOrder;

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

