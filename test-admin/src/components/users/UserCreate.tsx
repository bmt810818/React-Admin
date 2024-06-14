import { Create, SimpleForm, TextInput } from "react-admin"
import { User } from "../../constants/common.constant"

export const UserCreate = () => (
  <Create title={User.create}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="username" />
    </SimpleForm>
  </Create>
)