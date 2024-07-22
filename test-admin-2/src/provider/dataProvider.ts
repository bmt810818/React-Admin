import jsonServerProvider from 'ra-data-json-server';
import { fetchUtils } from 'react-admin';


const dataProvider = jsonServerProvider(
  import.meta.env.VITE_BASE_URL,
  // httpClient
);

export default dataProvider;
