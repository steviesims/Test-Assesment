import { Router } from "express";
import { authenticate, authorize } from "../middleware/authMiddleware";
import { UserController } from "../controllers/user.controller";

const router = Router();
const controller = new UserController();

router.use(authenticate);

router.get("/", authorize("admin", "manager"), controller.list);
router.get("/:userId/role", authorize("admin", "manager"), controller.getUserRole);

export default router;
