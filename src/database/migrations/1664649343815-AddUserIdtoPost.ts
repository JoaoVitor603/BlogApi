import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddUserIdtoPost1664649343815 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'posts',
      new TableForeignKey({
        name: 'postsUser',
        columnNames: ['postOwnerId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('posts', 'postsUser');
  }
}
