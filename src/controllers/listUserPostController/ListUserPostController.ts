import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import logger from '../../config/logger';
import { PostRepository } from '../../database/repositories/PostRepository';
import { UserRepository } from '../../database/repositories/UserRepository';
import IController from '../../models/IController';
import IlistUserPostRequestDTO from '../../services/listUserPostsService/IlistUserPostRequestDTO';
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

      const { id } = request.params;

      const postsUser = new ListPostsUserService(
        postRespository,
        userRepository
      );

      const data: IlistUserPostRequestDTO = {
        id,
      };

      const serviceResult = await postsUser.execute(data);

      return response.status(201).send(serviceResult);
    } catch (error: any) {
      logger.error(`ListUserController: ${error.message}`);
      return next(error);
    }
  }
}
