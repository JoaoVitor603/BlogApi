import IPost from '../../../models/IPost';
import IPostModel from '../../entities/models/IPostModel';
import Post from '../../entities/Posts.Entity';

export default interface IPostRepository {
  findByOwnerId(id: string, ownerPost: string): Promise<IPostModel | undefined>;
  findById(id: string): Promise<IPostModel | undefined>;
  createNewPost(user: IPost): Promise<string>;
  deletePost(post: Post): Promise<void>;
  listPosts(id: string): Promise<IPostModel[]>;
  updatePost(post: IPostModel): Promise<string>;
  listAllPosts(): Promise<Post[]>;
}
