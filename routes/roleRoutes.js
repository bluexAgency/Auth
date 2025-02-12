import {Router} from "express";

import RolesController from "../controllers/RolesController.js";


const roleRouter = Router();

roleRouter.get("/",RolesController.getAllRole)
roleRouter.get('/:id',RolesController.getAllRoleById);
roleRouter.post('/',RolesController.createRole);
roleRouter.put('/:id',RolesController.updateRole);
roleRouter.delete('/:id',RolesController.deleteRole);

export default roleRouter