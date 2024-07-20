import {
  Admin,
  Resource,
} from "react-admin";
import GeneticList from "./components/genetics/GeneticList";
import GeneticEdit from "./components/genetics/GeneticEdit";
import GeneticShow from "./components/genetics/GeneticShow";
import GeneticCreate from "./components/genetics/GeneticCreate";
import UserCreate from "./components/users/UserCreate";
import UserList from "./components/users/UserList";
import UserShow from "./components/users/UserShow";
import UserEdit from "./components/users/UserEdit";
import MyLayout from "./components/all/MyLayout";
import dataProvider from "./provider/dataProvider";
import MyLoginPage from "./components/logins/Login";
import authProvider from "./provider/authProvider";


export const App = () => (
  <Admin
    loginPage={MyLoginPage}
    // authProvider={authProvider}
    dataProvider={dataProvider}
    layout={MyLayout}
  >
    <Resource 
      name="auth/users"
      list={UserList}
      show={UserShow}
      create={UserCreate}
      edit={UserEdit}
    />
    <Resource
      name="genetics/genetic"
      list={GeneticList}
      show={GeneticShow}
      create={GeneticCreate}
      edit={GeneticEdit}
    />
  </Admin>
);
