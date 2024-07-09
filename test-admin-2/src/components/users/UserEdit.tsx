import { Edit, required, SimpleForm, TextField, TextInput } from "react-admin";

const UserEdit = () => (
  <Edit>
    <SimpleForm>
    <TextField source="username" title="username" />
      <TextInput source="password" validate={[required()]} />
    </SimpleForm>
  </Edit>
)

export default UserEdit