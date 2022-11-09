import 'reflect-metadata';
import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import IUserRepository from '../../database/repositories/interfaces/IUserRepository';
import ApiError from '../../utils/apiError.utils';
import IcreateUserDTO from './IcreateUserRequestDTO';

@injectable()
export default class CreateUserService {
  constructor(
    @inject('IUserRepository')
    public userRespository: IUserRepository
  ) {}

  public async execute(data: IcreateUserDTO) {
    const { userName, email, password } = data;

    const emailExists = await this.userRespository.findByEmail(email);

    if (emailExists) {
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
