import { getCustomRepository } from 'typeorm';
import { PostRepository } from '../../database/repositories/PostRepository';

export default class ListAllPostsUserService {
  public async execute() {
    const postRespository = getCustomRepository(PostRepository);
    const newPost = await postRespository.find();

    return newPost;
  }
}
