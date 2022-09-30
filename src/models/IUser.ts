export default interface IUser {
  id?: string;
  userName: string;
  email: string;
  password: string;
  admin: boolean;
  created_at?: Date;
  updated_at?: Date;
}
