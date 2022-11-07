import { getCustomRepository } from 'typeorm';
import {
  Body,
  Path,
  Controller,
  SuccessResponse,
  Post,
  Tags,
  Route,
  Security,
  OperationId,
} from 'tsoa';
import { PostRepository } from '../../database/repositories/PostRepository';
import { UserRepository } from '../../database/repositories/UserRepository';
import IcreatePostRequestDTO from '../../services/createPostService/IcreatePostRequestDTO';
import CreatePostService from '../../services/createPostService/createPostService';

import IPost, { IPostRequest } from '../../models/IPost';

@Route('/posts')
export class CreatePostController extends Controller {
  /**
   * Cria um novo Post e retorna o post criado.
   * @summary Cria um novo post.
   */

  @Tags('Posts')
  @Security('bearer_Token')
  @Post('{id}')
  @OperationId('createPost')
  @SuccessResponse('201', 'Created')
  public async handle(
    @Body() requestBody: IPostRequest,
    @Path() id: string
  ): Promise<IPost> {
    const postRespository = getCustomRepository(PostRepository);
    const userRepository = getCustomRepository(UserRepository);

    const { title, content, category } = requestBody;

    const createPost = new CreatePostService(postRespository, userRepository);

    const data: IcreatePostRequestDTO = {
      title,
      content,
      category,
      postOwnerId: id,
    };

    const serviceResult = await createPost.execute(data);

    return serviceResult;
  }
}
