import { Router } from "express";
import { CreateUserController } from "../../controllers/Users/CreateUserController";
import { GetAllUsersController } from "../../controllers/Users/GetAllUsersController";

const userRouter = Router();

userRouter
.post('/user/createUser', CreateUserController)
.get('/user/getAllUsers', GetAllUsersController)

export { userRouter }