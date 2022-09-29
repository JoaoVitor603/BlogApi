import { Router } from 'express';

import CreateUserController from '../../controllers/createUserController/CreateUserController';

export const userRouter = Router();
const userControler = new CreateUserController();

userRouter.post('/', userControler.handle);

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
