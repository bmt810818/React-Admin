import { 
    Show, 
    SimpleShowLayout, 
    TextField 
} from "react-admin";


export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
        </SimpleShowLayout>
    </Show>
);
