import { hash } from 'bcrypt';

import IUserRepository from '../../database/repositories/interfaces/IUserRepository';
import ApiError from '../../utils/apiError.utils';
import IcreateUserDTO from './IcreateUserRequestDTO';

export default class CreateUserService {
  constructor(public userRespository: IUserRepository) {}

  // private async emailExist(data: IcreateUserDTO): Promise<void> {
  //   const { email } = data;
  //   const emailExist = await this.userRespository.findByEmail(email);
  //   if (emailExist) {
  //     throw new ApiError(400, true, 'this email already registred');
  //   }
  // }

  public async execute(data: IcreateUserDTO) {
    const { userName, email, password } = data;

    const emailExist = await this.userRespository.findByEmail(email);

    if (emailExist) {
      throw new ApiError(400, false, 'this email already registred');
    }

    const hashedPassowrd = await hash(password, 7);

    const user = this.userRespository.saveNewUser({
      userName,
      email,
      password: hashedPassowrd,
      admin: false,
    });

    return user;
  }
}
