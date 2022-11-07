import {
  Body,
  Controller,
  OperationId,
  Post,
  Response,
  Route,
  SuccessResponse,
  Tags,
} from 'tsoa';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../../database/repositories/UserRepository';
import { ValidateErrorJSON } from '../../models/IPost';
import CreateSessionService from '../../services/createSessionService/createSessionService';

import ICreateSessionRequestDTO from '../../services/createSessionService/IcreateSessionRequest';
import ICreateSessionResponseDTO from '../../services/createSessionService/IcreateSessionResponse';

@Route('/session')
export class CreateSessionController extends Controller {
  /**
   * Cria uma sessão do usuário.
   * @summary Cria uma nova sessão.
   */

  @Tags('Session')
  @Post('')
  @OperationId('createSession')
  @SuccessResponse('201', 'Created')
  @Response<ValidateErrorJSON[]>(400, 'Wrong email/password', [
    { message: 'Incorrect email/password combination.' },
  ])
  public async handle(
    @Body() requestBody: ICreateSessionRequestDTO
  ): Promise<ICreateSessionResponseDTO> {
    const userRepository = getCustomRepository(UserRepository);

    const { email, password } = requestBody;

    const createSession = new CreateSessionService(userRepository);

    const data: ICreateSessionRequestDTO = {
      email,
      password,
    };

    const serviceResult = await createSession.execute(data);

    return serviceResult;
  }
}
