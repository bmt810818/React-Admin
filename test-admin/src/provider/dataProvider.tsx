import jsonServerProvider from 'ra-data-json-server';

export const dataProvider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL
);

dataProvider.getList('posts', {
  pagination: { page: 1, perPage: 5 },
  sort: { field: 'title', order: 'ASC' },
  filter: { author_id: 12 },
})
.then(response => console.log(response));