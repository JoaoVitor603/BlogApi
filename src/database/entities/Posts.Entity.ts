import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Base from './Base.Entity';
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

  @ManyToOne(() => User)
  @JoinColumn({ name: 'postOwnerId' })
  public postOwnerId: string;
}
