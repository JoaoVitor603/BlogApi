import Post from '../Posts.Entity';

export default interface IPostModel extends Post {
  postOwnerId: string;
  created_at: Date;
  updated_at: Date;
}
