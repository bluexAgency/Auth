import {Router} from "express";

import MenuController from "../controllers/MenuController.js";

const menuRouter = Router()

menuRouter.get("/",MenuController.getAllMenu)
menuRouter.get('/:id',MenuController.getMenuById);
menuRouter.post('/',MenuController.createMenu);
menuRouter.put('/:id',MenuController.updateMenu);
menuRouter.delete('/:id',MenuController.deleteMenu);

export default menuRouter