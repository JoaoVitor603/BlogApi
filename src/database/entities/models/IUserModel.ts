export default interface IUserModel {
  id: string;
  userName: string;
  email: string;
  password: string;
  admin: boolean;
  created_at?: Date;
  updated_at?: Date;
}
