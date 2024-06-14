import { Menu } from 'react-admin';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';

export const MyMenu = () => (
  <Menu>
    {/* <Title title={Base.name}/> */}
    <Menu.DashboardItem />
    <Menu.Item to="/users" primaryText="Quản lý người dùng" leftIcon={<SettingsIcon />}/>
  </Menu>
)