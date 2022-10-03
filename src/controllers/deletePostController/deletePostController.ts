import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import logger from '../../config/logger';
import { PostRepository } from '../../database/repositories/PostRepository';
import IController from '../../models/IController';
import DeletePostService from '../../services/deletePostService/deletePostService';
import IDeletePostRequestDTO from '../../services/deletePostService/IdeletePostRequestDTO';

export default class DeletePostController implements IController {
  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const deleteRespository = getCustomRepository(PostRepository);

      const { body } = request;

      const { postId, postOwnerId } = body;

      const postsUser = new DeletePostService(deleteRespository);

      const data: IDeletePostRequestDTO = {
        postId,
        postOwnerId,
      };

      const serviceResult = await postsUser.execute(data);

      return response.status(201).send(serviceResult);
    } catch (error: any) {
      logger.error(`ListUserController: ${error.message}`);
      return next(error);
    }
  }
}
