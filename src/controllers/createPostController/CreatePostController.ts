import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import logger from '../../config/logger';
import { PostRepository } from '../../database/repositories/PostRepository';
import { UserRepository } from '../../database/repositories/UserRepository';
import IController from '../../models/IController';
import IcreatePostRequestDTO from '../../services/createPostService/IcreatePostRequestDTO';
import CreatePostService from '../../services/createPostService/createPostService';

export default class CreatePostController implements IController {
  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const postRespository = getCustomRepository(PostRepository);
      const userRepository = getCustomRepository(UserRepository);

      const { id } = request.params;

      const { body } = request;

      const { title, content, category } = body;

      const createPost = new CreatePostService(postRespository, userRepository);

      const data: IcreatePostRequestDTO = {
        title,
        content,
        category,
        postOwnerId: id,
      };

      const serviceResult = await createPost.execute(data);

      return response.status(201).send(serviceResult);
    } catch (error: any) {
      logger.error(`CreateUserController: ${error.message}`);
      return next(error);
    }
  }
}
