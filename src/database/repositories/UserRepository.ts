import { EntityRepository, Repository } from 'typeorm';
import IUser from '../../models/IUser';
import IUserModel from '../entities/models/IUserModel';
import Users from '../entities/User.Entity';

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {
  public async saveNewUser(user: IUser): Promise<string> {
    const { userName, email, password, admin } = user;

    const newUser = this.create({ userName, email, password, admin });

    const saveResult = await this.save(newUser);

    return saveResult.id.toString();
  }

  // ToDO criar interface para o tipo das Promise
  public async findByEmail(email: string): Promise<IUserModel | undefined> {
    const user = await this.findOne({
      where: {
        email,
      },
    });
    return user;
  }

  public async findById(id: string): Promise<IUserModel | undefined> {
    const user = await this.findOne({
      where: {
        id,
      },
    });
    return user;
  }
}
