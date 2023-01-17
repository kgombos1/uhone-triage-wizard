import { githubServices } from '../services/github';

export const resolvers = {
  Query: {
    user(_, args) {
      return githubServices.getUser(args);
    },
  },
};
