import { List, TextField } from "react-admin";

const UserList = () => (
<List>
  <TextField source="id"/>
  <TextField source="name"/>
</List>
);

export default UserList