import { Admin, CustomRoutes, Resource } from 'react-admin';
import { Route } from "react-router-dom";
import { UserEdit, UserList, UserShow } from './components/users';
import { dataProvider } from './provider/dataProvider';
import { UserCreate } from './components/users/UserCreate';
import { MyLayout } from './MyLayout';
import { User } from './constants/common.constant';


export const App = () => (
    <Admin 
      dataProvider={dataProvider}
    >
      <Resource 
        name={"users"}
        list={UserList}
        show={UserShow}
        edit={UserEdit}
        create={UserCreate}
      />
      <CustomRoutes>
        <Route path="/list" element={<UserList />}/>
        <Route path="/show" element={<UserShow />}/>
        <Route path="/edit" element={<UserEdit />}/>
        <Route path="/create" element={<UserCreate />}/>
      </CustomRoutes>
    </Admin>
);