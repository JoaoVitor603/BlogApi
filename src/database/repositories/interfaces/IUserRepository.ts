import IUser from '../../../models/IUser';
import IUserModel from '../../entities/models/IUserModel';

export default interface IUserRepository {
  findByEmail(id: string): Promise<IUserModel | undefined>;
  findById(id: string): Promise<Users | undefined>;
  saveNewUser(user: IUser): Promise<IUser>;
}
