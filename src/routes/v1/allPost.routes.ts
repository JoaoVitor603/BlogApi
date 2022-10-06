import { Router } from 'express';
import ListAllPostsController from '../../controllers/listAllPostsController/listAllPostsController';

const listAllPosts = new ListAllPostsController();

export const publicPost = Router();

publicPost.get('/', listAllPosts.handle);
