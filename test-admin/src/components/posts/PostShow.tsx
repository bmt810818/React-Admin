import { 
  Show, 
  SimpleShowLayout, 
  TextField, 
  RichTextField, 
  DateField 
} from "react-admin";


export const PostShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="teaser" />
      <RichTextField source="body" />
      <DateField label="Publication date" source="published_at" />
    </SimpleShowLayout>
  </Show>
);
