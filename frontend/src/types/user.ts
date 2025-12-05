import { type AuthUser } from "./auth";

export type User = AuthUser & {
  roles: Role[];
};

export type Role = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};
