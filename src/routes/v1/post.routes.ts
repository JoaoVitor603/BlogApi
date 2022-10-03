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

postRouter.post('/post', isAuthenticated, postController.handle);
postRouter.get('/post', validate(getGetUserPostsSchema), getController.handle);
postRouter.delete('/post', deleteController.handle);
postRouter.put('/post', putController.handle);
postRouter.get('/', listAllPosts.handle);

/**
 * @openapi
 * '/api/products/{productId}':
 *  get:
 *     tags:
 *     - Products
 *     summary: Get a single product by the productId
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *      - name: productId
 *        in: path
 *        description: The id of the product
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/Product' *       404:
 *         description: Product not found
 */
