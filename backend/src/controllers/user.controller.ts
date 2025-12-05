import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

export class UserController {
  private userRepository = AppDataSource.getRepository(User);

  list = async (_req: Request, res: Response) => {
    try {
      const users = await this.userRepository.find();
      const status = !!users.length ? 200 : 204;
      return res.status(status).json(users);
    } catch (error) {
      return res.status(500).json({ message: "Failed to fetch users" });
    }
  };

  getUserRole = async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;

      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }

      const user = await this.userRepository.findOne({
        where: { id: userId },
        relations: ["roles"],
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const { roles } = user;

      if (!roles || roles.length === 0) {
        return res.status(404).json({ message: "User has no role assigned" });
      }

      const role = roles[0];
      if (!role) {
        return res.status(404).json({ message: "User has no role assigned" });
      }

      const roleName = role.name;

      return res.status(200).json({ role: roleName });
    } catch (error) {
      return res.status(500).json({ message: "Failed to fetch user role" });
    }
  };
}
