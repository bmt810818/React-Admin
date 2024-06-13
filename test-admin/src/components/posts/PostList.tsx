import { 
  TextField, 
  Edit, 
  SimpleForm, 
  TextInput, 
  List, 
  Datagrid, 
  ReferenceField, 
  EditButton, 
  EmailField
} from 'react-admin';

export const PostList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="address.street" />

        <ReferenceField source="userId" reference="users" />
        <EditButton />,
      </Datagrid>
    </List>
  );
};
export const PostEdit = () => (
  <Edit>
      <SimpleForm>
          <TextField source="id" /> {/* read-only */}
          <TextInput source="title" />
      </SimpleForm>
  </Edit>
);