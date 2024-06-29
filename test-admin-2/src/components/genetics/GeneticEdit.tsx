import { Edit, required, TextInput } from "react-admin";

const GeneticEdit = () => (
  <Edit>
    <TextInput source="name" validate={[required()]} />
    <TextInput source="image" validate={[required()]} />
    <TextInput source="dna_code" validate={[required()]} />
    <TextInput source="rna_code" validate={[required()]} />
    <TextInput source="status" validate={[required()]} />
    <TextInput source="describe" validate={[required()]} />
  </Edit>
)

export default GeneticEdit