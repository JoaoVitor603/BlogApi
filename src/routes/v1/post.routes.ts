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

/**
 * @openapi
 * '/api/v1/posts':
 *  post:
 *     tags:
 *     - Posts
 *     summary: Create a post
 *     parameters:
 *      - name: userId
 *        in: path
 *        description: The userId
 *        required: true
 *     description: Only registered users can create other posts.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePostInput'
 *           example:
 *             title: Titulo Blog
 *             content: Sou um teste
 *             category: Tecnologia
 *
 *
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreatePostResponse'
 *       404:
 *         description: User not found
 *         content:
 *          application/json:
 *           schema:
 *            type: object
 *            properties:
 *              message:
 *               type: string
 *               description: Returns error
 *
 *           example:
 *             message: User not found
 */

postRouter.post('/:id', isAuthenticated, postController.handle);
postRouter.get('/:id', getController.handle);
postRouter.delete('/:id', isAuthenticated, deleteController.handle);
postRouter.put('/', putController.handle);
