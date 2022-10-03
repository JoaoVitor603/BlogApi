import IPostRepository from '../../database/repositories/interfaces/IPostRepository';
import ApiError from '../../utils/apiError.utils';
import IDeletePostRequestDTO from './IdeletePostRequestDTO';

export default class DeletePostService {
  constructor(public postRespository: IPostRepository) {}

  public async execute(data: IDeletePostRequestDTO) {
    const { postId, postOwnerId } = data;

    const post = await this.postRespository.findById(postId);

    if (!post) {
      throw new ApiError(400, false, 'Post not found');
    }

    const postAndOwner = await this.postRespository.findByOwnerId(
      postId,
      postOwnerId
    );

    if (!postAndOwner) {
      throw new ApiError(400, false, 'this post not belongs to this user');
    }

    const deleteResult = await this.postRespository.deletePost(postAndOwner);

    return deleteResult;
  }
}
