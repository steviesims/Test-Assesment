import { type AuthUser } from "./auth";

export type User = AuthUser;

export type Role = {
  id: string;
  name: string;
  users: AuthUser[];
  createdAt: string;
  updatedAt: string;
};
