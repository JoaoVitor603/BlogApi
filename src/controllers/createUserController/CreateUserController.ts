import {
  Body,
  Controller,
  OperationId,
  Post,
  Route,
  SuccessResponse,
  Tags,
} from 'tsoa';
import { injectable } from 'tsyringe';
import CreateUserService from '../../services/createUserService/createUserService';
import IcreateUserRequestDTO from '../../services/createUserService/IcreateUserRequestDTO';

@injectable()
@Route('/users')
export class CreateUserController extends Controller {
  constructor(private createUserService: CreateUserService) {
    super();
  }

  @Tags('User')
  @Post('')
  @OperationId('createUser')
  @SuccessResponse('201', 'Created')
  public async handle(
    @Body() requestBody: IcreateUserRequestDTO
  ): Promise<string> {
    const { userName, email, password } = requestBody;

    const data: IcreateUserRequestDTO = {
      userName,
      email,
      password,
    };

    const serviceResult = await this.createUserService.execute(data);

    return serviceResult;
  }
}
