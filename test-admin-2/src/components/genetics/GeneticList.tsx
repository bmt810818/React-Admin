import { Datagrid, List, TextField } from "react-admin"

const GeneticList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="dna_code" /> 
      <TextField source="rna_code" /> 
      <TextField source="image" /> 
      <TextField source="status" /> 
      <TextField source="describe" /> 
    </Datagrid>
  </List>
)

export default GeneticList