import { Router } from "express";
import { authenticate, authorize } from "../middleware/authMiddleware";
import { UserController } from "../controllers/user.controller";

const router = Router();
const controller = new UserController();

router.use(authenticate);

router.get("/", authorize("admin", "manager"), controller.list);
router.get("/roles/:roleId", authorize("admin", "manager"), controller.getRoleById);

export default router;
