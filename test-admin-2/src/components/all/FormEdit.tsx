import { FC } from "react"
import { Edit, EditActions, TextInput } from "react-admin"
import { Box } from "@mui/material"

export type FormEditProps = {
  resource?: String
  title?: String
}

const FormEdit: FC<FormEditProps> = ({source, title}) => {

  return (
    <Box>
      {/* <EditActions>
        <TextInput source={source} label={title}/>
      </EditActions> */}
    </Box>
  )
}