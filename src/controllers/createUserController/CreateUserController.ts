import {
  Body,
  Controller,
  OperationId,
  Post,
  Route,
  SuccessResponse,
  Tags,
} from 'tsoa';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../../database/repositories/UserRepository';
import CreateUserService from '../../services/createUserService/createUserService';
import IcreateUserRequestDTO from '../../services/createUserService/IcreateUserRequestDTO';

@Route('/users')
export class CreateUserController implements Controller {
  @Tags('User')
  @Post('')
  @OperationId('createUser')
  @SuccessResponse('201', 'Created')
  public async handle(
    @Body() requestBody: IcreateUserRequestDTO
  ): Promise<string> {
    const { userName, email, password } = requestBody;

    const createUser = new CreateUserService(
      getCustomRepository(UserRepository)
    );

    const data: IcreateUserRequestDTO = {
      userName,
      email,
      password,
    };

    const serviceResult = await createUser.execute(data);

    return serviceResult;
  }
}
