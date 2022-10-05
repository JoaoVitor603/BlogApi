import { Router } from 'express';
import CreatePostController from '../../controllers/createPostController/CreatePostController';
import DeletePostController from '../../controllers/deletePostController/deletePostController';
import ListAllPostsController from '../../controllers/listAllPostsController/listAllPostsController';
import ListUserPostController from '../../controllers/listUserPostController/ListUserPostController';
import UpdatePostController from '../../controllers/updatePostController/updatePostController';
import isAuthenticated from '../../middlewares/isAuth';

import validate from '../../middlewares/validateResource';
import { getGetUserPostsSchema } from '../../schemas/post.schema';

export const postRouter = Router();

const postController = new CreatePostController();
const getController = new ListUserPostController();
const deleteController = new DeletePostController();
const putController = new UpdatePostController();
const listAllPosts = new ListAllPostsController();

postRouter.post('/', isAuthenticated, postController.handle);
postRouter.get(
  '/:userId',
  validate(getGetUserPostsSchema),
  getController.handle
);
postRouter.delete('/', deleteController.handle);
postRouter.put('/', putController.handle);
postRouter.get('/', listAllPosts.handle);
