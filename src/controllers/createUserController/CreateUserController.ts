// import { Request, Response } from 'express';
// import { StatusCodes } from 'http-status-codes';
// import { CreateProductInput } from '../schemas/product.schema';

import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import logger from '../../config/logger';
import { UserRepository } from '../../database/repositories/UserRepository';
import IController from '../../models/IController';
import CreateUserService from '../../services/createUserService/createUserService';
import IcreateUserRequestDTO from '../../services/createUserService/IcreateUserRequestDTO';

// import { createProduct } from '../services/product.service';

// export async function createProductHandler(
//   req: Request<{}, {}, CreateProductInput['body']>,
//   res: Response
// ) {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const { user } = res.locals;

//   const { body } = req;

//   const product = await createProduct({ ...body });

//   res.status(StatusCodes.CREATED).json(product);
// }

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
