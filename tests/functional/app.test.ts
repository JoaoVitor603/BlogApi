// import { mock } from 'jest-mock-extended';
// // import supertest from 'supertest';
// import Request from 'supertest';

// import UserRepositoryFake from '../../src/database/repositories/fake/UserRepositoryFake';

import supertest from 'supertest';
import app from '../../src/index';

// // const repositoryMock = new UserRepositoryFake();

// beforeAll(async () => await  ());

// describe('User tests', () => {
//   it('should create a new user', async () => {
//     const response = await Request(app).post('/').send({
//       userName: 'Primeiro usuário',
//       email: 'testeSuper@gmail.com',
//       password: 'teste123',
//     });
//     expect(response.status).toBe(201);
//   });
// });

describe('App', () => {
  it('should return hello world', async () => {
    const { status, body } = await supertest(app).get('/api/healthcheck');
    expect(status).toBe(200);
    expect(body.message).toBe('Hello World');
  });
});
