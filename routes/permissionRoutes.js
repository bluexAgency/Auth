import {Router} from "express";

import PermissionController from "../controllers/PermissionController.js";

const permissionRouter = Router()

permissionRouter.get("/",PermissionController.getAllPermission)
permissionRouter.get('/:id',PermissionController.getPermissionById);
permissionRouter.post('/',PermissionController.createPermission);
permissionRouter.put('/:id',PermissionController.updatePermission);
permissionRouter.delete('/:id',PermissionController.deletePermission);

export default permissionRouter