import { ThemeProvider } from "@mui/material"
import {Create, ImageField, ImageInput, required, SelectField, SimpleForm, TextInput} from "react-admin"
import BaseTheme from "../../constants/themes/BaseTheme"
import { RichTextInput } from "ra-input-rich-text"
import { SKIN_COLOR } from "../../constants/genetics/humans"


const GeneticCreate = () => (
  <ThemeProvider theme={BaseTheme}>
  <Create title={"Thêm mới mã di truyền"}>
    <SimpleForm>
        <TextInput source="name" validate={[required()]} />
        <TextInput source="type" validate={[required()]} />
        <TextInput source="status" validate={[required()]} />
        <RichTextInput source="description" validate={[required()]} />
        <TextInput source="positive" validate={[required()]} />
        <TextInput source="negative" validate={[required()]} />

    </SimpleForm>
  </Create>
  </ThemeProvider>
)

export default GeneticCreate