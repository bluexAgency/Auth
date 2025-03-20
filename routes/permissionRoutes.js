import {Router} from "express";

import PermissionController from "../controllers/PermissionController.js";

import validatePermission from "../validators/permissions/permissionValidator.js";

const permissionRouter = Router()

permissionRouter.get("/",PermissionController.getAllPermission)
permissionRouter.get('/:id',PermissionController.getPermissionById);
permissionRouter.post('/',validatePermission,PermissionController.createPermission);
permissionRouter.put('/:id',validatePermission,PermissionController.updatePermission);
permissionRouter.delete('/:id',PermissionController.deletePermission);

export default permissionRouter