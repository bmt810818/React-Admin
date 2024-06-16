import { Datagrid, List, TextField } from "react-admin";

export const SettingList = () => (
  <List>
    <Datagrid>
    <TextField source="id"/>
    </Datagrid>
  </List>
)