import { Router } from "express";
import MenuPermisoController from "../controllers/MenuPermisoController.js";

const menuPermisosRouter = Router()

menuPermisosRouter.get("/",MenuPermisoController.getAllMenuPermisos)
menuPermisosRouter.post('/',MenuPermisoController.createMenuPermiso);
menuPermisosRouter.put('/:id',MenuPermisoController.updateMenuPermiso);
menuPermisosRouter.delete('/:id',MenuPermisoController.deleteMenuPermiso);

export default menuPermisosRouter