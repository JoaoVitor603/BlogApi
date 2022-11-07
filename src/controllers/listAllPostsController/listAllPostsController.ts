import {
  Controller,
  Get,
  OperationId,
  Route,
  SuccessResponse,
  Tags,
} from 'tsoa';
import IPost from '../../models/IPost';
import ListAllPostsUserService from '../../services/listAllPostsService/listAllPosts';

@Route('/allPosts')
export class ListAllPostsController extends Controller {
  /**
   * Lista todos posts.
   * @summary Lista todos os posts da API
   */
  @Tags('Posts')
  @Get('')
  @OperationId('listAllPosts')
  @SuccessResponse('201', 'Created')
  public async handle(): Promise<IPost[]> {
    const listAllPosts = new ListAllPostsUserService();

    const serviceResult = await listAllPosts.execute();

    return serviceResult;
  }
}
