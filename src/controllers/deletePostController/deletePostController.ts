import {
  Body,
  Controller,
  Delete,
  OperationId,
  Path,
  Response,
  Route,
  SuccessResponse,
  Tags,
} from 'tsoa';
import { getCustomRepository } from 'typeorm';
import { PostRepository } from '../../database/repositories/PostRepository';
import { UserRepository } from '../../database/repositories/UserRepository';
import { ValidateErrorJSON } from '../../models/IPost';
import DeletePostService from '../../services/deletePostService/deletePostService';
import IDeletePostRequestDTO, {
  IDeletePostRequestBody,
} from '../../services/deletePostService/IdeletePostRequestDTO';

@Route('/posts')
export class DeletePostController extends Controller {
  /**
   * Realiza a deleção de um post.
   * @summary Deleta um post.
   */

  @Tags('Posts')
  @Delete('{id}')
  @OperationId('deletePost')
  @SuccessResponse('201', 'Created')
  @Response<ValidateErrorJSON[]>(400, 'Wrong email/password', [
    { message: 'User not found' },
    { message: 'Post not found' },
    { message: 'this post not belongs to this user' },
  ])
  public async handle(
    @Body() requestBody: IDeletePostRequestBody,
    @Path() id: string
  ): Promise<void> {
    const deleteRespository = getCustomRepository(PostRepository);
    const userRepository = getCustomRepository(UserRepository);

    const { postId } = requestBody;

    const postsUser = new DeletePostService(deleteRespository, userRepository);

    const data: IDeletePostRequestDTO = {
      postId,
      postOwnerId: id,
    };

    await postsUser.execute(data);
  }
}
