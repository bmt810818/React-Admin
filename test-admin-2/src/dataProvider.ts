import simpleRestProvider from "ra-data-simple-rest";

const dataProvider = simpleRestProvider(
  import.meta.env.VITE_SIMPLE_REST_URL
);

export default dataProvider
