import { compare } from 'bcrypt';
import IUserRepository from '../../database/repositories/interfaces/IUserRepository';
import ApiError from '../../utils/apiError.utils';
import { signJwt } from '../../utils/jwt.utils';
import IcreateSessionRequestDTO from './IcreateSessionRequest';

export default class CreateSessionService {
  constructor(public userRespository: IUserRepository) {}

  public async execute(data: IcreateSessionRequestDTO) {
    const { email, password } = data;

    const user = await this.userRespository.findByEmail(email);

    if (!user) {
      throw new ApiError(400, false, 'Incorrect email/password combination.');
    }

    const passwordConfirm = await compare(password, user.password);

    if (!passwordConfirm) {
      throw new ApiError(400, false, 'Incorrect password combination.');
    }

    const token = signJwt({ sub: user.id, admin: user.admin });

    return { user, token };
  }
}
