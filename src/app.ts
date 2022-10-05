import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import config, { environments } from './config/config';
import routes from './routes';
import ApiError from './utils/apiError.utils';

const app = express();

app.use(express.json());

app.use(helmet());
app.use(compression());
app.use(cors());
app.options('*', cors());

if (config.env !== environments.PRODUCTION) {
  app.use(morgan('tiny'));
}
routes(app);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof ApiError) {
      return response.status(error.statusCode).json({
        message: error.message,
      });
    }
    return response.status(500).json({
      message: 'Internal server error',
    });
  }
);

export default app;
