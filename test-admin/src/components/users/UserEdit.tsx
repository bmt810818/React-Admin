import { Edit, SaveButton, SimpleForm, Toolbar, TextInput } from "react-admin"

export const UserEdit = () => (
  <Edit>
    <SimpleForm toolbar={<CustomToobar />}>
    <TextInput source="name" />
    <TextInput source="email" />
    <TextInput source="username" />
    </SimpleForm>
  </Edit>
);

const CustomToobar = () => (
  <Toolbar>
    <SaveButton />
  </Toolbar>
);