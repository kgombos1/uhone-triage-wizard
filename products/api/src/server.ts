import express from 'express';
import { network } from '@abyss/api/middleware/network';
import { createServer } from '@abyss/api/tools/server';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(network);
app.use(routes);

export const server = async () => {
  return createServer(app);
};
