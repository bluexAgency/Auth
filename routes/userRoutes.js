import {Router} from "express";

import userController from "../controllers/userController.js";


const userRouter = Router();

userRouter.get('/',userController.getAllUser);
userRouter.get('/:id',userController.getUserById);
userRouter.post('/',userController.createUser);
userRouter.put('/:id',userController.updateUser);
userRouter.delete('/:id',userController.deleteuser);


export default userRouter