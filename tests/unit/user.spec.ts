import UserRepositoryFake from '../../src/database/repositories/fake/UserRepositoryFake';
import CreateUserService from '../../src/services/createUserService/createUserService';
import 'reflect-metadata';

describe('User tests', () => {
  const userRespositoryFake = new UserRepositoryFake();
  const sut = new CreateUserService(userRespositoryFake);

  describe('Create User', () => {
    it('should create a new user', async () => {
      await sut.execute({
        userName: 'Primeiro usuário',
        email: 'teste19@gmail.com',
        password: 'teste123',
      });
    });
  });
});
