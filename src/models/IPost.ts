import IUserModel from '../database/entities/models/IUserModel';

export default interface IPost {
  id?: string;
  title: string;
  content: string;
  postOwnerUserName: string;
  postOwner: IUserModel;
  category: string[];
  created_at?: Date;
  updated_at?: Date;
}
