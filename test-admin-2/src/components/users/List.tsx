import { Datagrid, List, TextField } from "react-admin";

const UserList = () => (
<List>
  <Datagrid>
    <TextField source="id"/>
    <TextField source="name"/>
    <TextField source="status"/>
  </Datagrid>
</List>
);

export default UserList