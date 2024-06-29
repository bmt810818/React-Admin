import { Show, SimpleShowLayout, TextField } from "react-admin";

const GeneticShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="dna_code" /> 
      <TextField source="rna_code" /> 
      <TextField source="image" /> 
      <TextField source="status" /> 
      <TextField source="describe" /> 
    </SimpleShowLayout>
  </Show>
)

export default GeneticShow