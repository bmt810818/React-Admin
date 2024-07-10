import { Datagrid, List, TextField } from "react-admin";

const UserList = () => (
<List>
  <Datagrid>
    <TextField source="id"/>
    <TextField source="username"/>
  </Datagrid>
</List>
);

export default UserList