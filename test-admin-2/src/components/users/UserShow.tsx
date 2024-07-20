import { Show, SimpleShowLayout, TextField } from "react-admin";

const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="username"/>
    </SimpleShowLayout>
  </Show>
)

export default UserShow