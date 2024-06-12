import { Datagrid, List, TextField } from "react-admin";

export const BaseList = () => {
  <List>
    <Datagrid>
      <TextField source="empty"/>
    </Datagrid>
  </List>
}