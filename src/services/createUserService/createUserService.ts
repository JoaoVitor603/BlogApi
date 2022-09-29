import { hash } from 'bcrypt';
import { getCustomRepository } from 'typeorm';

import IUserRepository from '../../database/repositories/interfaces/IUserRepository';
import { UserRepository } from '../../database/repositories/UserRepository';
import ApiError from '../../utils/apiError.utils';
import IcreateUserDTO from './IcreateUserRequestDTO';

export default class CreateUserService {
  // constructor(public userRespository: IUserRepository) {}

  private async emailExist(data: IcreateUserDTO): Promise<void> {
    // const { email } = data;
    // const emailExist = await userRespository.findByEmail(email);
    // if (emailExist) {
    //   throw new ApiError(400, false, 'this email is already registred');
    // }
  }

  public async execute(data: IcreateUserDTO) {
    const userRespository = getCustomRepository(UserRepository);
    const { userName, email, password } = data;

    const emailExist = await userRespository.findByEmail(email);

    if (emailExist) {
      throw new ApiError(400, false, 'this email is already registred');
    }

    this.emailExist(data);

    const hashedPassowrd = await hash(password, 7);

    const user = userRespository.saveNewUser({
      userName,
      email,
      password: hashedPassowrd,
      admin: false,
    });

    // // await userRespository.save(user);

    return user;
  }
}
