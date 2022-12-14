import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import logger from '../../config/logger';
import { UserRepository } from '../../database/repositories/UserRepository';
import IController from '../../models/IController';
import CreateUserService from '../../services/createUserService/createUserService';
import IcreateUserRequestDTO from '../../services/createUserService/IcreateUserRequestDTO';

export default class CreateUserController implements IController {
  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { body } = request;

      const { userName, email, password } = body;

      const createUser = new CreateUserService(
        getCustomRepository(UserRepository)
      );

      const data: IcreateUserRequestDTO = {
        userName,
        email,
        password,
      };

      const serviceResult = await createUser.execute(data);

      return response.status(201).send(serviceResult);
    } catch (error: any) {
      logger.error(`CreateUserController: ${error.message}`);
      return next(error);
    }
  }
}
