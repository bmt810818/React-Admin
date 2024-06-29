import { Create, DateInput, required, SimpleForm, TextInput } from "react-admin"

const GeneticCreate = () => (
  <Create>
    <SimpleForm>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="image" validate={[required()]} />
            <TextInput source="dna_code" validate={[required()]} />
            <TextInput source="rna_code" validate={[required()]} />
            <TextInput source="status" validate={[required()]} />
            <TextInput source="describe" validate={[required()]} />
        </SimpleForm>
  </Create>
)

export default GeneticCreate