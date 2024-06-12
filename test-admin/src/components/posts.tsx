import * as React from "react";
import { Show, SimpleShowLayout, TextField, DateField, RichTextField, Edit, SimpleForm, TextInput, List, Datagrid, ReferenceField, EditButton } from 'react-admin';

export const PostList = () => (
  <List>
    <Datagrid>
    <TextField source="id" />
    <ReferenceField source="userId" reference="users" />
    <EditButton />,
    </Datagrid>
  </List>
);
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

export const PostEdit = () => (
  <Edit>
      <SimpleForm>
          <TextField source="id" /> {/* read-only */}
          <TextInput source="title" />
      </SimpleForm>
  </Edit>
);