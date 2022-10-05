import { Router } from 'express';
import CreateSessionController from '../../controllers/createSessionController/createSessionController';

export const sessionRouter = Router();
const sessionController = new CreateSessionController();

sessionRouter.post('/', sessionController.handle);
