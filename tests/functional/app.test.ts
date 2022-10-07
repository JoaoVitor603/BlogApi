import supertest from 'supertest';
import app from '../../src/app';

describe('App', () => {
  it('should return 200', async () => {
    const { status } = await supertest(app).get('/api/healthcheck');
    expect(status).toBe(200);
  });
});
