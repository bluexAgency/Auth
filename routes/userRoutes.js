import {Router} from "express";
import userController from "../controllers/userController.js";
import validateCreate from "../validators/users.js";

const userRouter = Router();

userRouter.get('/',userController.getAllUser);
userRouter.get('/:id',userController.getUserById);
userRouter.post('/',validateCreate,userController.createUser);
userRouter.put('/:id',userController.updateUser);
userRouter.delete('/:id',userController.deleteuser);


export default userRouter