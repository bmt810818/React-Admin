import { Create, Loading, SimpleForm, TextInput, useAuthState, usePermissions } from "react-admin";

const UserCreate = () => {
    return (
        <Create redirect="list">
            <SimpleForm>
              <TextInput source="username" required/>
              <TextInput source="password" required/>
            </SimpleForm>
        </Create>
    );
}

export default UserCreate