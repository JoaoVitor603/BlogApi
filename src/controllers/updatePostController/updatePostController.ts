import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import logger from '../../config/logger';
import { PostRepository } from '../../database/repositories/PostRepository';

import IController from '../../models/IController';
import IUpdatePostRequestDTO from '../../services/updatePostService/updatePostRequestDTO';
import UpdatePostService from '../../services/updatePostService/updatePostService';

export default class UpdatePostController implements IController {
  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const postRespository = getCustomRepository(PostRepository);

      const { body } = request;

      const { postId, postOwnerId, title, content, category } = body;

      const postsUser = new UpdatePostService(postRespository);

      const data: IUpdatePostRequestDTO = {
        postId,
        postOwnerId,
        title,
        content,
        category,
      };

      const serviceResult = await postsUser.execute(data);

      return response.status(201).send(serviceResult);
    } catch (error: any) {
      logger.error(`ListUserController: ${error.message}`);
      return next(error);
    }
  }
}
