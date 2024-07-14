import { IconButton } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { AppBar, TitlePortal } from "react-admin"

const SettingsButton = () => (
  <IconButton color="inherit">
      <SettingsIcon />
  </IconButton>
);

const MyAppBar = () => {
  return (
    <AppBar color="primary" position="sticky">
      <TitlePortal />
      <SettingsButton />
    </AppBar>
  )
}

export default MyAppBar