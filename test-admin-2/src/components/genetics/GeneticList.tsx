import {CloneButton, Datagrid, DeleteButton, EditButton, List, RichTextField, ShowButton, TextField} from "react-admin"


const GeneticList = () => (
  <List disableAuthentication title={"Danh sách mã di truyền"}>
      <Datagrid>
          <TextField source="name" title="Tên"/>
          <TextField source="type" title="Loại mã"/>
          <TextField source="negative" title="Tác dụng phụ"/>
          <TextField source="positive"title="Lợi ích"/>
          <TextField source="status" title="Trạng thái"/>
          <CloneButton/>  
          <ShowButton/>
          <EditButton/>
          <DeleteButton/>
      </Datagrid>
  </List>
)

export default GeneticList