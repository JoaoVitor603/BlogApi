import IPostRepository from '../../database/repositories/interfaces/IPostRepository';
import IUserRepository from '../../database/repositories/interfaces/IUserRepository';
import IlistUserPostRequestDTO from './IlistUserPostRequestDTO';
import ApiError from '../../utils/apiError.utils';

export default class ListPostsUserService {
  constructor(
    public postRespository: IPostRepository,
    public userRepository: IUserRepository
  ) {}

  public async execute(data: IlistUserPostRequestDTO) {
    if (!data.id) {
      throw new ApiError(400, false, 'User not found');
    }
    const userOwner = await this.userRepository.findById(data.id);

    if (!userOwner) {
      throw new ApiError(400, false, 'User not found');
    }

    const newPost = await this.postRespository.listPosts(userOwner.id);

    return newPost;
  }
}
