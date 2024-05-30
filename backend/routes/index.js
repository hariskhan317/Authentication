import { Router } from 'express';
import userRoute from './userRoutes.js'
const appRouter = Router();

appRouter.use('/user', userRoute);

export default appRouter;