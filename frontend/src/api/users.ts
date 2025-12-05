import { apiClient } from "./client";
import { User } from "../types/user";
import { Role } from "../types/user";

export const fetchUsers = async (): Promise<User[]> => {
  const { data } = await apiClient.get<User[]>("/users");
  return data;
};

export const fetchRoleById = async (roleId: string): Promise<Role> => {
  const { data } = await apiClient.get<Role>(`/users/roles/${roleId}`);
  return data;
};
