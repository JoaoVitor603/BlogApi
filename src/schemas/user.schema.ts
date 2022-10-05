import { object, string, InferType } from 'yup';

const payload = {
  body: object({
    userName: string().defined('UserName is required'),
    email: string().defined('Email is required'),
    password: string().defined('Description is required'),
  }).defined(),
};

const params = {
  params: object({ productId: string().defined('productId is required') }),
};

export const createUserSchema = object({
  ...payload,
});

export const updateProductSchema = object({
  ...payload,
  ...params,
});

export const deleteProductSchema = object({
  ...params,
});

export const getProductSchema = object({
  ...params,
});

export type CreateProductInput = InferType<typeof createUserSchema>;
export type UpdateProductInput = InferType<typeof updateProductSchema>;
export type ReadProductInput = InferType<typeof getProductSchema>;
export type DeleteProductInput = InferType<typeof deleteProductSchema>;
