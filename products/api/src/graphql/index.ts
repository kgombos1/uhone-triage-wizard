import { apollo } from '@abyss/api/middleware/apollo';
import { loadFiles } from '@abyss/api/tools/loadFiles';
import { resolvers } from './resolvers';

const schemaFiles = require.context('./schema', true, /\.graphql$/);
const typeDefs = loadFiles(schemaFiles);

const apolloConfig = {
  typeDefs,
  resolvers,
};

export const graphql = apollo(apolloConfig);
