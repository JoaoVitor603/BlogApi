import { Column, Entity, ManyToOne } from 'typeorm';
import Base from './Base.Entity';
// eslint-disable-next-line import/no-cycle
import User from './User.Entity';

@Entity('posts')
export default class Post extends Base {
  @Column({ length: 120 })
  public title: string;

  @Column({ length: 150 })
  public content: string;

  @Column({ length: 150 })
  public postOwnerUserName: string;

  @Column('simple-array', { nullable: false })
  public category: string[];

  @ManyToOne(() => User, (user) => user.id)
  public postOwner: User;
}
