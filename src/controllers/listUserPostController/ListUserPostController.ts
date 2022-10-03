import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import logger from '../../config/logger';
import { PostRepository } from '../../database/repositories/PostRepository';
import { UserRepository } from '../../database/repositories/UserRepository';
import IController from '../../models/IController';
import IlistUserPostRequestDTO from '../../services/listUserPostsService/IListUserPosts';
import ListPostsUserService from '../../services/listUserPostsService/listUserPostsService';

export default class ListUserPostsController implements IController {
  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const postRespository = getCustomRepository(PostRepository);
      const userRepository = getCustomRepository(UserRepository);

      const { body } = request;

      const { postOwnerId } = body;

      const postsUser = new ListPostsUserService(
        postRespository,
        userRepository
      );

      const data: IlistUserPostRequestDTO = {
        id: postOwnerId,
      };

      const serviceResult = await postsUser.execute(data);

      return response.status(201).send(serviceResult);
    } catch (error: any) {
      logger.error(`ListUserController: ${error.message}`);
      return next(error);
    }
  }
}
