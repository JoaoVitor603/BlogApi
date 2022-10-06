import IPostRepository from '../../database/repositories/interfaces/IPostRepository';
import IUserRepository from '../../database/repositories/interfaces/IUserRepository';
import ApiError from '../../utils/apiError.utils';
import IDeletePostRequestDTO from './IdeletePostRequestDTO';

export default class DeletePostService {
  constructor(
    public postRespository: IPostRepository,
    public userRepository: IUserRepository
  ) {}

  public async execute(data: IDeletePostRequestDTO) {
    const { postOwnerId, postId } = data;

    const post = await this.postRespository.findById(postId);
    const user = await this.userRepository.findById(postOwnerId);

    if (!user) {
      throw new ApiError(400, false, 'User not found');
    }

    if (!post) {
      throw new ApiError(400, false, 'Post not found');
    }

    if (user.id !== post.postOwner.id.toString()) {
      throw new ApiError(400, false, 'this post not belongs to this user');
    }

    await this.postRespository.deletePost(post);

    return post;
  }
}
