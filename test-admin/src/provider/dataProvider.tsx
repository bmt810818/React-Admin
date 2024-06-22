import { withLifecycleCallbacks } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const baseDataProvider = simpleRestProvider('http://path.to.my.api/');

export const dataProvider = withLifecycleCallbacks(baseDataProvider, [
  {
    resource: 'posts',
    beforeDelete: async (params, dataProvider) => {
      // delete all comments related to the post
      // first, fetch the comments
      const { data: comments } = await dataProvider.getList('comments', {
        filter: { post_id: params.id },
        pagination: { page: 1, perPage: 1000 },
        sort: { field: 'id', order: 'DESC' },
      });
      // then, delete them
      await dataProvider.deleteMany('comments', { ids: comments.map(comment => comment.id) });

      return params;
    },
  },
]);