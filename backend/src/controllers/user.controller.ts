import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { Role } from "../entities/Role";

export class UserController {
  private userRepository = AppDataSource.getRepository(User);
  private roleRepository = AppDataSource.getRepository(Role);

  list = async (_req: Request, res: Response) => {
    try {
      const users = await this.userRepository.find();
      const status = !!users.length ? 200 : 204;
      return res.status(status).json(users);
    } catch (error) {
      return res.status(500).json({ message: "Failed to fetch users" });
    }
  };

  getRoleById = async (req: Request, res: Response) => {
    try {
      const { roleId } = req.params;

      if (!roleId) {
        return res.status(400).json({ message: "Role ID is required" });
      }

      const role = await this.roleRepository.findOne({
        where: { id: roleId },
        relations: ["users"],
      });

      if (!role) {
        return res.status(404).json({ message: "Role not found" });
      }
      return res.status(200).json(role);
    } catch (error) {
      return res.status(500).json({ message: "Failed to fetch role" });
    }
  };
}
