import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import logger from '../../config/logger';
import { UserRepository } from '../../database/repositories/UserRepository';
import IController from '../../models/IController';
import CreateSessionService from '../../services/createSessionService/createSessionService';

import IcreateSessionRequestDTO from '../../services/createSessionService/IcreateSessionRequest';

export default class CreateSessionController implements IController {
  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const userRepository = getCustomRepository(UserRepository);

      const { body } = request;

      const { email, password } = body;

      const createSession = new CreateSessionService(userRepository);

      const data: IcreateSessionRequestDTO = {
        email,
        password,
      };

      const serviceResult = await createSession.execute(data);

      return response.status(201).send(serviceResult);
    } catch (error: any) {
      logger.error(`CreateUserController: ${error.message}`);
      return next(error);
    }
  }
}
