import { object, string, InferType, array } from 'yup';

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *        - title
 *        - description
 *        - price
 *        - image
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         price:
 *           type: number
 *         image:
 *           type: string
 */

const payload = {
  body: object({
    postOwnerID: object().shape({
      id: string().required(),
    }),
    title: string().defined('UserName is required'),
    content: string().defined('Email is required'),
    category: array().min(1).required('categ is required'),
  }).defined(),
};

const payloadGetUserPosts = {
  body: object({
    postOwnerId: string().defined('categ is required'),
  }).defined(),
};

const params = {
  params: object({ productId: string().defined('productId is required') }),
};

export const createPostSchema = object({
  ...payload,
});

export const updateProductSchema = object({
  ...payload,
  ...params,
});

export const deleteProductSchema = object({
  ...params,
});

export const getGetUserPostsSchema = object({
  ...payloadGetUserPosts,
});

export type CreatePostInput = InferType<typeof createPostSchema>;
export type UpdateProductInput = InferType<typeof updateProductSchema>;
export type ReadProductInput = InferType<typeof getGetUserPostsSchema>;
export type DeleteProductInput = InferType<typeof deleteProductSchema>;
