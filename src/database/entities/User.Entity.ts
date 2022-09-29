import { Column, Entity } from 'typeorm';
import Base from './Base.Entity';

@Entity('users')
export default class Product extends Base {
  @Column({ length: 120 })
  public userName: string;

  @Column({ length: 50 })
  public email: string;

  @Column({ length: 30, nullable: false })
  public password: string;

  @Column({ nullable: false })
  public admin: boolean;
}
