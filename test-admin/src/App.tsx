import { Admin, Resource } from 'react-admin';
import { UserList, UserShow } from './components/users';
import { PostList, PostShow } from './components/posts';
import { dataProvider } from './provider/dataProvider';


export const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name='users' list={UserList} show={UserShow} />
      <Resource name='posts' list={PostList} show={PostShow} />
    </Admin>
);