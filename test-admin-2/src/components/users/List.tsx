import { Datagrid, List, TextField } from "react-admin";

const UserList = () => (
<List>
  <Datagrid>
    <TextField source="id"/>
    <TextField source="username"/>
    <TextField source="status"/>
  </Datagrid>
</List>
);

export default UserList