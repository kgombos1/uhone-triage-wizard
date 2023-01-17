import { loadFiles } from '@abyss/api/tools/loadFiles';
import { dataSource } from '@abyss/api/tools/dataSource/rest';

const parsersFiles = require.context('./parsers', true, /\.ts$/);
const parsers = loadFiles(parsersFiles);

const githubAPI = dataSource({
  url: 'https://github.optum.com/api/v3',
});

export const githubServices = {
  getUser: async (args) => {
    const data = await githubAPI({
      method: 'GET',
      path: `/users/${args.id}`,
      onSuccess: (response) => {
        return parsers.parseUser(response.data);
      },
    });
    return data;
  },
};
