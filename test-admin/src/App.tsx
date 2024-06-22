import { Admin, CustomRoutes, Resource } from 'react-admin';
import { Route } from "react-router-dom";
import { UserEdit, UserList, UserShow } from './components/users';
import { dataProvider } from './provider/dataProvider';
import { UserCreate } from './components/users/UserCreate';
import { SettingList } from './components/settings/SettingList';
import NotFound from './components/NotFound';
import Dashboard from './Dashboard';


export const App = () => (
    <Admin 
      basename="/admin"
      catchAll={NotFound}
      title={"Welcome to Toan Bui"}
      dashboard={Dashboard}
      dataProvider={dataProvider}
    >
      <Resource 
        name={"users"}
        list={UserList}
        show={UserShow}
        edit={UserEdit}
        create={UserCreate}
      />
      <Resource 
        name={"settings"}
        show={SettingList}
      />
      <CustomRoutes>
        <Route path="/list" element={<UserList />}/>
        <Route path="/show" element={<UserShow />}/>
        <Route path="/edit" element={<UserEdit />}/>
        <Route path="/create" element={<UserCreate />}/>
      </CustomRoutes>
    </Admin>
);