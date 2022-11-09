import { EntityRepository, getRepository } from 'typeorm';
import IUser from '../../models/IUser';
import IUserModel from '../entities/models/IUserModel';
import User from '../entities/User.Entity';
import IUserRepository from './interfaces/IUserRepository';

@EntityRepository(User)
export class UserRepository implements IUserRepository {
  private repository = getRepository(User);

  public async saveNewUser(user: IUser): Promise<string> {
    const { userName, email, password, admin } = user;

    const newUser = this.repository.create({
      userName,
      email,
      password,
      admin,
    });

    const saveResult = await this.repository.save(newUser);

    return saveResult.id.toString();
  }

  public async findByEmail(email: string): Promise<IUserModel | undefined> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });
    return user;
  }

  public async findById(id: string): Promise<IUserModel | undefined> {
    const user = await this.repository.findOne({
      where: {
        id,
      },
    });
    return user;
  }
}
