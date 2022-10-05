import { Router } from 'express';

import CreateUserController from '../../controllers/createUserController/CreateUserController';
import validate from '../../middlewares/validateResource';
import { createUserSchema } from '../../schemas/user.schema';

export const userRouter = Router();
const userController = new CreateUserController();

userRouter.post('/', validate(createUserSchema), userController.handle);
