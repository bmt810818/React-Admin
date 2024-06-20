import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";

export const App = () => (
  <Admin
      dataProvider={dataProvider}
      // authProvider={authProvider}
  >
    <Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="genes"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="companies"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
