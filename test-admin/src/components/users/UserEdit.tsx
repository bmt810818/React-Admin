import { Edit, TextInput } from "react-admin"

export const UserEdit = () => (
  <Edit>
    <TextInput source="name" />
    <TextInput source="email" />
    <TextInput source="username" />
  </Edit>
)