import { Admin, Resource, ListGuesser, ShowGuesser } from 'react-admin';
import { UserList, UserShow } from './components/users';
import { dataProvider } from './provider/dataProvider';
import { PostList, PostShow } from './components/posts';


export const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name='users' list={UserList} show={ShowGuesser} recordRepresentation="name"/>
      <Resource name='posts' list={PostList} show={PostShow}/>
    </Admin>
);