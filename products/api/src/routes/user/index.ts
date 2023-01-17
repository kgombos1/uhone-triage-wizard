import express from 'express';
import { githubServices } from '../../services/github';

export const userRouter = express.Router();

userRouter.get('/:id', async (req, res) => {
  const data = await githubServices.getUser(req.params);
  res.send(data);
});
