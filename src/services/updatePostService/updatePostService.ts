import IPostRepository from '../../database/repositories/interfaces/IPostRepository';

import ApiError from '../../utils/apiError.utils';

import IUpdatePostRequestDTO from './updatePostRequestDTO';

export default class UpdatePostService {
  constructor(public postRespository: IPostRepository) {}

  public async execute(data: IUpdatePostRequestDTO) {
    const { title, content, category, postOwnerId, postId } = data;

    const post = await this.postRespository.findByOwnerId(postId, postOwnerId);

    if (!post) {
      throw new ApiError(400, false, 'post not found');
    }

    post.title = title;
    post.content = content;
    post.category = category;

    const updateResult = await this.postRespository.updatePost(post);

    return updateResult;
  }
}
