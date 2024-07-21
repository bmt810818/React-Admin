import { ThemeProvider } from "@mui/material";
import { RichTextInput } from "ra-input-rich-text";
import {Edit, required, SimpleForm, TextInput} from "react-admin";
import BaseTheme from "../../constants/themes/BaseTheme";

const GeneticEdit = () => (
<ThemeProvider theme={BaseTheme}>
  <Edit title={"Cập nhật mã di truyền"}>
    <SimpleForm>
    <TextInput source="name" validate={[required()]} />
      <TextInput source="code" validate={[required()]} />
      <TextInput source="status" validate={[required()]} />
      <RichTextInput source="description"/>
      <TextInput source="positive" validate={[required()]} />
      <TextInput source="negative" validate={[required()]} />
    </SimpleForm>
  </Edit>
  </ThemeProvider>
)

export default GeneticEdit