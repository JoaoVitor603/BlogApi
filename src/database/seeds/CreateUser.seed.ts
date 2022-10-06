import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { hash } from 'bcrypt';
import Users from '../entities/User.Entity';

export default class CreateAdmin implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<any> {
    const rows = await connection.getRepository(Users).count();
    if (rows <= 0) {
      const password = 'teste123';
      const hashedPassowrd = await hash(password, 7);
      await connection

        .createQueryBuilder()
        .insert()
        .into(Users)
        .values([
          {
            userName: 'usuarioAdm',
            email: 'admin@gmail.com',
            password: hashedPassowrd,
            admin: true,
          },
        ])

        .execute();
    }
  }
}
