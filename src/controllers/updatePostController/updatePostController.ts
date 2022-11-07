import {
  Body,
  Controller,
  OperationId,
  Path,
  Put,
  Route,
  SuccessResponse,
  Tags,
} from 'tsoa';
import { getCustomRepository } from 'typeorm';
import { PostRepository } from '../../database/repositories/PostRepository';
import IPost from '../../models/IPost';
import IUpdatePostRequestDTO, {
  IUpdatePostRequestBody,
} from '../../services/updatePostService/updatePostRequestDTO';
import UpdatePostService from '../../services/updatePostService/updatePostService';
// TODO - Alterar serviço do front enviar id do usuário nos params
@Route('/posts')
export class UpdatePostController extends Controller {
  /**
   * Altera campos do post.
   * @summary modifica campos de um post existente.
   */
  @Tags('Posts')
  @Put('{id}')
  @OperationId('updatePosts')
  @SuccessResponse('201', 'Created')
  public async handle(
    @Body() requestBody: IUpdatePostRequestBody,
    @Path() id: string
  ): Promise<IPost> {
    const postRespository = getCustomRepository(PostRepository);

    const { postId, title, content, category } = requestBody;

    const postsUser = new UpdatePostService(postRespository);

    const data: IUpdatePostRequestDTO = {
      postId,
      postOwnerId: id,
      title,
      content,
      category,
    };

    const serviceResult = await postsUser.execute(data);

    return serviceResult;
  }
}
