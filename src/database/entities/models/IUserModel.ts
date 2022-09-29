import Users from '../User.Entity';

export default interface IUserModel extends Users {
  id: number;
  userName: string;
  email: string;
  password: string;
}
