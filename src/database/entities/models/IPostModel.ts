import Post from '../Posts.Entity';

export default interface IPostModel extends Post {
  created_at: Date;
  updated_at: Date;
}
