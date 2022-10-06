import { Router } from 'express';
import CreatePostController from '../../controllers/createPostController/CreatePostController';
import DeletePostController from '../../controllers/deletePostController/deletePostController';
import ListUserPostController from '../../controllers/listUserPostController/ListUserPostController';
import UpdatePostController from '../../controllers/updatePostController/updatePostController';
import isAuthenticated from '../../middlewares/isAuth';

export const postRouter = Router();

const postController = new CreatePostController();
const getController = new ListUserPostController();
const deleteController = new DeletePostController();
const putController = new UpdatePostController();

postRouter.post('/:id', isAuthenticated, postController.handle);
postRouter.get('/:id', getController.handle);
postRouter.delete('/:id', isAuthenticated, deleteController.handle);
postRouter.put('/', putController.handle);
