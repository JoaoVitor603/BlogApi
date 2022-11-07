import { EntityRepository, Repository } from 'typeorm';
import IPost from '../../models/IPost';
import IPostModel from '../entities/models/IPostModel';
import Post from '../entities/Posts.Entity';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  public async createNewPost(post: IPost): Promise<IPost> {
    const { title, content, category, postOwner, postOwnerUserName } = post;

    const newPost = this.create({
      title,
      content,
      postOwnerUserName,
      category,
      postOwner,
    });

    const saveResult = await this.save(newPost);

    return saveResult;
  }

  public async findById(id: string): Promise<IPostModel | undefined> {
    const post = await this.findOne({
      relations: ['postOwner'],
      where: {
        id,
      },
    });

    return post;
  }

  public async findByOwnerId(
    id: string,
    postOwnerId: string
  ): Promise<IPostModel | undefined> {
    const post = await this.findOne({
      where: {
        id,
        postOwner: postOwnerId,
      },
    });
    return post;
  }

  public async deletePost(postId: IPostModel): Promise<void> {
    await this.remove(postId);
  }

  public async listPosts(id: string): Promise<IPost[]> {
    const post = await this.find({
      where: {
        postOwner: id,
      },
    });

    return post;
  }

  public async listAllPosts(): Promise<Post[]> {
    const posts = await this.find();

    return posts;
  }

  public async updatePost(post: IPost): Promise<IPost> {
    const saveResult = await this.save(post);

    return saveResult;
  }
}
