import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import Post from '../entities/Posts.Entity';

export default class CreatePost implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<any> {
    const rows = await connection.getRepository(Post).count();
    if (rows <= 0) {
      await connection

        .createQueryBuilder()
        .insert()
        .into(Post)
        .values([
          {
            title: 'Post Criado automaticamente',
            content: 'Fui criado pela seed.',
            category: ['SISTEMA'],
          },
        ])

        .execute();
    }
  }
}
