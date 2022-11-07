import {
  Controller,
  Get,
  OperationId,
  Path,
  Route,
  Security,
  SuccessResponse,
  Tags,
} from 'tsoa';
import { getCustomRepository } from 'typeorm';
import { PostRepository } from '../../database/repositories/PostRepository';
import { UserRepository } from '../../database/repositories/UserRepository';
import IPost from '../../models/IPost';
import IlistUserPostRequestDTO from '../../services/listUserPostsService/IlistUserPostRequestDTO';
import ListPostsUserService from '../../services/listUserPostsService/listUserPostsService';

@Route('/posts')
export class ListUserPostsController extends Controller {
  /**
   * Lista todos posts de um usuário.
   * @summary Lista de posts de um usuário.
   * @param id
   */
  @Tags('Posts')
  @Get('{id}')
  @OperationId('listUserPosts')
  @Security('bearer_Token')
  @SuccessResponse('201', 'Created')
  public async handle(@Path() id: string): Promise<IPost[]> {
    const postRespository = getCustomRepository(PostRepository);
    const userRepository = getCustomRepository(UserRepository);

    const postsUser = new ListPostsUserService(postRespository, userRepository);

    const data: IlistUserPostRequestDTO = {
      id,
    };

    const serviceResult = await postsUser.execute(data);

    return serviceResult;
  }
}
