import { Express, Request, Response } from 'express';
import { postRouter } from './v1/post.routes';
import { userRouter } from './v1/product.routes';
import { sessionRouter } from './v1/session.routes';

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
// app.get('/api/healthcheck', (req: Request, res: Response) =>
//   res.sendStatus(200)
// );

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

  app.use('/', userRouter);
  app.use('/', postRouter);
  app.use('/', sessionRouter);
}

// const routes = Router();

// routes.use('/', userRouter);

export default routes;
