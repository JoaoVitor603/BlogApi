import { Column, Entity, OneToMany } from 'typeorm';
import Base from './Base.Entity';
// eslint-disable-next-line import/no-cycle
import Post from './Posts.Entity';

@Entity('users')
export default class User extends Base {
  @Column({ length: 120 })
  public userName: string;

  @Column({ length: 50 })
  public email: string;

  @Column({ length: 30, nullable: false })
  public password: string;

  @OneToMany(() => Post, (posts) => posts.id)
  posts?: Post[];

  @Column({ nullable: false })
  public admin: boolean;
}
