import { Admin, CustomRoutes, Resource } from 'react-admin';
import { Route } from "react-router-dom";
import { UserEdit, UserList, UserShow } from './components/users';
import { dataProvider } from './provider/dataProvider';
import { UserCreate } from './components/users/UserCreate';
import { SettingList } from './components/settings/SettingList';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { Auth0AuthProvider } from 'ra-auth-auth0';


const auth0 = new Auth0Client({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  cacheLocation: 'localstorage',
  authorizationParams: {
    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
  },
});

const authProvider = Auth0AuthProvider(auth0, {
  loginRedirectUri: import.meta.env.VITE_LOGIN_REDIRECT_URL,
  logoutRedirectUri: import.meta.env.VITE_LOGOUT_REDIRECT_URL,
});

export const App = () => (
    <Admin 
      title={"Welcome to Toan Bui"}
      dataProvider={dataProvider}
      authProvider={authProvider}
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