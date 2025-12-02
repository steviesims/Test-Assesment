import { apiClient } from "./client";
import { User } from "../types/user";

export const fetchUsers = async (): Promise<User[]> => {
  const { data } = await apiClient.get<User[]>("/users");
  return data;
};
