import IUserModel from '../database/entities/models/IUserModel';

export default interface IPost {
  id?: string;
  title: string;
  content: string;
  postOwnerUserName: string;
  category: string[];
  postOwner?: IUserModel;
  created_at?: Date;
  updated_at?: Date;
}

/**
 @example {
  "title": "Titulo de Example",
  "content": "sou um exemplo",
  "category": ["TECNOLOGIA"]
 }
 */
export interface IPostRequest {
  title: string;
  content: string;
  category: string[];
}

export interface ValidateErrorJSON {
  message: string;
}
