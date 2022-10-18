import { Express, Request, Response } from 'express';
import { postRouter } from './v1/post.routes';
import { userRouter } from './v1/user.routes';
import { sessionRouter } from './v1/session.routes';
import { publicPost } from './v1/allPost.routes';

function routes(app: Express) {
  /**
   * @openapi
   * /api/healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get('/api/healthcheck', (req: Request, res: Response) =>
    res.sendStatus(200)
  );

  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/posts', postRouter);
  app.use('/api/v1/allPosts/', publicPost);
  app.use('/api/v1/session', sessionRouter);
}

export default routes;
