import {
  Admin,
  Resource,
} from "react-admin";
import { Layout } from "./Layout";
import UserList from "./components/users/List";
// import dataProvider from "./dataProvider";
import simpleRestProvider from "ra-data-simple-rest";
import jsonServerProvider from 'ra-data-json-server';



const dataProvider = jsonServerProvider('http://localhost:8080');


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
