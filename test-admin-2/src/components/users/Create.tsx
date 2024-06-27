import { Create, Loading, SimpleForm, TextInput, useAuthState, usePermissions } from "react-admin";

const UserCreate = () => {
  const { permissions } = usePermissions();
  const { isPending, authenticated } = useAuthState()
  if (isPending) {
    return <Loading />
  }
  if (authenticated) {
    // return < />
  }
    return (
        <Create>
            <SimpleForm>
                <TextInput source="name" />
                {permissions === 'admin' &&
                    <TextInput source="role" />}
            </SimpleForm>
        </Create>
    );
}