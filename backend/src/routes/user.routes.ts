import { Router } from "express";
import { authenticate, authorize } from "../middleware/authMiddleware";
import { UserController } from "../controllers/user.controller";

const router = Router();
const controller = new UserController();

router.use(authenticate);

router.get("/", authorize("admin", "manager"), controller.list);

export default router;
