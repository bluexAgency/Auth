import {Router} from "express";
import validateRoles from "../validators/roles/rolesValidator.js";
import RolesController from "../controllers/RolesController.js";


const roleRouter = Router();

roleRouter.get("/",RolesController.getAllRole)
roleRouter.get('/:id',validateRoles,RolesController.getAllRoleById);
roleRouter.post('/',RolesController.createRole);
roleRouter.put('/:id',validateRoles,RolesController.updateRole);
roleRouter.delete('/:id',RolesController.deleteRole);

export default roleRouter