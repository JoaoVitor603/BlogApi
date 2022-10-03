import IPostRepository from '../../database/repositories/interfaces/IPostRepository';
import IUserRepository from '../../database/repositories/interfaces/IUserRepository';

import ApiError from '../../utils/apiError.utils';
import IcreatePostRequestDTO from './IcreatePostRequestDTO';

export default class CreateUserService {
  constructor(
    public postRespository: IPostRepository,
    public userRepository: IUserRepository
  ) {}

  public async execute(data: IcreatePostRequestDTO) {
    const { title, content, category, postOwnerId } = data;

    const userOwner = await this.userRepository.findById(postOwnerId);

    if (!userOwner) {
      throw new ApiError(400, false, 'User not found');
    }

    const newPost = await this.postRespository.createNewPost({
      title,
      content,
      category,
      postOwnerUserName: userOwner.userName,
      postOwnerId,
    });

    return newPost;
  }
}
