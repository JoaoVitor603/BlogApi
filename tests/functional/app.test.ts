// import { request } from 'http';

// import supertest from 'supertest';
// import { object } from 'yup';
// import UserRepositoryFake from '../../src/database/repositories/fake/UserRepositoryFake';
// import app from '../../src/index';
// import App from '../../src/index';
// import CreateUserService from '../../src/services/createUserService/createUserService';

// jest.mock('typeorm');

// describe('App', () => {
//   it('should return hello world', async () => {
//     const { text, status } = await supertest(app).get('/');
//     expect(status).toBe(200);
//     expect(text).toBe('Hello world');
//   });
// });

// describe('User tests', () => {
//   const userRespositoryFake = new UserRepositoryFake();
//   const sut = new CreateUserService(userRespositoryFake);

//   describe('Create User', () => {
//     it('should create a new user', async () => {
//       request(app);
//       .post('/');
//       const user = await sut.execute({
//         userName: 'Primeiro usuário',
//         email: 'teste10@gmail.com',
//         password: 'teste123',
//       });
//       expect(user).toHaveProperty('id');
//     });
//   });
// });
