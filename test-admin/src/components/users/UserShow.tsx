import { 
    Show, 
    SimpleShowLayout, 
    TextField 
} from "react-admin";


export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="username" />
        </SimpleShowLayout>
    </Show>
)
