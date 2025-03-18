import { Router } from "express";
import RolPermisoController from "../controllers/RolPermisoController.js";

const router = Router();


router.get("/", RolPermisoController.getAllRolPermisos);
router.post("/", RolPermisoController.createRolPermiso);
router.put('/:id',RolPermisoController.updateRolPermiso);
router.delete("/:id", RolPermisoController.deleteRolPermiso);

export default router;