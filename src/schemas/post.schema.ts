import { object, string, InferType, array } from 'yup';

/**
 * @openapi
 * components:
 *   schemas:
 *     CreatePostInput:
 *       type: object
 *       required:
 *        - title
 *        - content
 *        - category
 *       properties:
 *         title:
 *           type: string
 *         content:
 *           type: string
 *         category:
 *           type: array
 *           items:
 *            type: string
 *
 *
 *     CreatePostResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The new post Id
 *
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
