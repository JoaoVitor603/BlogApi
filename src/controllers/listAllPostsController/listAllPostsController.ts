import { NextFunction, Request, Response } from 'express';
import logger from '../../config/logger';
import IController from '../../models/IController';
import ListAllPostsUserService from '../../services/listAllPostsService/listAllPosts';

export default class ListAllPostsController implements IController {
  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const listAllPosts = new ListAllPostsUserService();

      const serviceResult = await listAllPosts.execute();

      return response.status(201).send(serviceResult);
    } catch (error: any) {
      logger.error(`ListUserController: ${error.message}`);
      return next(error);
    }
  }
}
