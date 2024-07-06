import {Create, ImageField, ImageInput, required, SimpleForm, TextInput} from "react-admin"

const GeneticCreate = () => (
  <Create>
    <SimpleForm>
        <TextInput source="name" validate={[required()]} />
        <TextInput source="code" validate={[required()]} />
        <TextInput source="status" validate={[required()]} />
        <TextInput source="description" validate={[required()]} />
    </SimpleForm>
  </Create>
)

export default GeneticCreate