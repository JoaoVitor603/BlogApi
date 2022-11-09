/* eslint-disable @typescript-eslint/no-unused-vars */
import { compact, isBuffer, update } from 'lodash';
import { getRepository } from 'typeorm';
import IUser from '../../../models/IUser';
import IUserModel from '../../entities/models/IUserModel';
import User from '../../entities/User.Entity';
import IUserRepository from '../interfaces/IUserRepository';

class UserRepositoryFake implements IUserRepository {
  private mockUsers: IUserModel[] = [
    {
      id: '776224b47ce040dcbe787c01b8fb51e7',
      userName: 'Primeiro usuário',
      email: 'teste10@gmail.com',
      password: 'teste123',
      admin: false,
      created_at: new Date('2022-07-06T03:51:22.354Z'),
      updated_at: new Date('2022-07-06T03:52:22.354Z'),
    },
  ];

  async saveNewUser(user: IUser): Promise<string> {
    const id = `48eca48e6j15fac272b62${Math.floor(Math.random() * 20) + 1}`;
    this.mockUsers.push({ id, ...user });
    return id;
  }

  async findByEmail(email: string): Promise<IUserModel | undefined> {
    const contact = this.mockUsers.find((user) => user.email === email);

    return contact;
  }

  async findById(id: string): Promise<IUserModel | undefined> {
    throw new Error('Method not implemented.');
  }
}

export default UserRepositoryFake;
