/* eslint-disable @typescript-eslint/no-unused-vars */
import { compact, isBuffer, update } from 'lodash';
import { title } from 'process';
import IPost from '../../../models/IPost';
import IUser from '../../../models/IUser';
import IPostModel from '../../entities/models/IPostModel';
import IUserModel from '../../entities/models/IUserModel';
import PostsEntity from '../../entities/Posts.Entity';
import IPostRepository from '../interfaces/IPostRepository';
import IUserRepository from '../interfaces/IUserRepository';

class PostRepositoryFake implements IPostRepository {
  listAllPosts(): Promise<PostsEntity[]> {
    throw new Error('Method not implemented.');
  }

  findByOwnerId(
    id: string,
    ownerPost: string
  ): Promise<IPostModel | undefined> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<IPostModel | undefined> {
    throw new Error('Method not implemented.');
  }

  deletePost(post: PostsEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }

  listPosts(id: string): Promise<IPostModel[]> {
    throw new Error('Method not implemented.');
  }

  private mockPosts: IPost[] = [
    {
      id: '776224b47ce040dcbe787c01b8fb51e7',
      title: 'Isso é um post fake',
      content: 'Conteúdo de teste',
      postOwnerUserName: 'Usuário de mentira',
      category: ['Tecnologia'],
      created_at: '2022-07-06T03:51:22.354Z' as unknown as Date,
      updated_at: '2022-07-06T03:51:22.354Z' as unknown as Date,
    },
    {
      id: '776224b47ce040dcbe787c01b8fb51e8',
      title: 'Isso é um post fake',
      content: 'Conteúdo de teste||',
      postOwnerUserName: 'Usuário de mentira',
      category: ['Tecnologia'],
      created_at: '2022-07-06T03:51:22.354Z' as unknown as Date,
      updated_at: '2022-07-06T03:51:22.354Z' as unknown as Date,
    },
  ];

  async createNewPost(Post: IPost): Promise<IPost> {
    const id = `48eca48e6j15fac272b62${Math.floor(Math.random() * 20) + 1}`;
    this.mockPosts.push({ id, ...Post });
    return Post;
  }

  async updatePost(post: IPost): Promise<IPost> {
    const oldpost = this.mockPosts.find((item) => {
      return item.id;
    });

    const updatedPost = {
      ...oldpost,
      title: post.title,
      content: post.content,
      category: post.category,
    };

    return post;
  }
}

export default PostRepositoryFake;
