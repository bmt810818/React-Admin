import createTheme from "@mui/material/styles/createTheme";


const BaseTheme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    }
  },
})

export default BaseTheme;