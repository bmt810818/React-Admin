import {
  Admin,
  Resource,
} from "react-admin";
import { Layout } from "./Layout";
import UserList from "./components/users/List";
// import dataProvider from "./dataProvider";
import simpleRestProvider from "ra-data-simple-rest";
import jsonServerProvider from 'ra-data-json-server';
import GeneticList from "./components/genetics/GeneticList";
import GeneticCreate from "./components/genetics/GeneticCreate";
import GeneticEdit from "./components/genetics/GeneticEdit";
import GeneticShow from "./components/genetics/GeneticShow";



const dataProvider = jsonServerProvider('http://localhost:8080');


export const App = () => (
  <Admin 
    layout={Layout}
    loginPage
    dataProvider={dataProvider} 
  >
    <Resource
      name="users"
      list={UserList}
    />
    <Resource
      name="genetics"
      list={GeneticList}
      create={GeneticCreate}
      edit={GeneticEdit}
      show={GeneticShow}
    />
  </Admin>
);
