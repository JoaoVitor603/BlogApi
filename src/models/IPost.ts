export default interface IPost {
  id?: string;
  title: string;
  content: string;
  postOwnerUserName: string;
  postOwnerId: string;
  category: string[];
  created_at?: Date;
  updated_at?: Date;
}
