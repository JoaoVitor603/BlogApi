import supertest from 'supertest';
import app from '../../src/app';

describe('App', () => {
  it('should return GREMIO', async () => {
    const { status } = await supertest(app).get('/api/healthcheck');
    expect(status).toBe(200);
  });
});
