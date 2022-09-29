import { Express, Request, Response, Router } from 'express';
import { userRouter } from './v1/product.routes';

// function routes(app: Express) {
//   /**
//    * @openapi
//    * /api/healthcheck:
//    *  get:
//    *     tags:
//    *     - Healthcheck
//    *     description: Responds if the app is up and running
//    *     responses:
//    *       200:
//    *         description: App is up and running
//    */
//   app.get('/api/healthcheck', (req: Request, res: Response) =>
//     res.sendStatus(200)
//   );

//   app.use('/', userRouter);
// }

const routes = Router();

routes.use('/', userRouter);

export default routes;
