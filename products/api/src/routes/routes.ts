import express from 'express';
import { graphql } from '../graphql';
import { userRouter } from './user';

export const routes = express.Router();

routes.use('/graphql', graphql);

routes.use('/user', userRouter);

routes.get('*', (req, res) => {
  res.send(`Hello from Abyss! ${process.env.APP_ENV}`);
});
