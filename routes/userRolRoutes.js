import { Router } from "express";
import UserRolController from "../controllers/UserRolController.js";

const router = Router();


router.get("/", UserRolController.getAllUserRoles);
router.post("/", UserRolController.createUserRol);
router.put('/:id',UserRolController.updateUserRol);
router.delete("/:id", UserRolController.deleteUserRol);

export default router;