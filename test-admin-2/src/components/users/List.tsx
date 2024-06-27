import { List, TextField } from "react-admin";

const UserList = () => (
<List>
  <TextField source="id"/>
  <TextField source="name"/>
  <TextField source="status"/>
</List>
);

export default UserList