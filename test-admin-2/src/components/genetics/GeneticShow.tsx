import {ImageField, Show, SimpleShowLayout, TextField} from "react-admin";

const GeneticShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="code" />
      <TextField source="status" /> 
      <TextField source="describe" /> 
    </SimpleShowLayout>
  </Show>
)

export default GeneticShow