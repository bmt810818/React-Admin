import {
  Admin,
  Resource,
} from "react-admin";
import { Layout } from "./Layout";
import UserList from "./components/users/List";
import dataProvider from "./dataProvider";


export const App = () => (
  <Admin 
    layout={Layout}
    loginPage
    dataProvider={dataProvider} 
  >
    <Resource
      name="toanbui"
      list={UserList}
    />
  </Admin>
);
