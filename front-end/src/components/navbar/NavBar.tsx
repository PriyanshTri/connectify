import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import "./NavBar.scss";
// @ts-ignore
import ConnectifyLogo from "./../../assets/connectify-logo.png";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";

function AppAppBar() {
  const navigateTo = useNavigate();

  const handleErrorThrow = () => {
    navigateTo("/");
  };

  return (
    <div>
      <AppBar position="fixed" className="app-bar">
        <Box className="app-bar-box">
          <IconButton aria-label="logo" onClick={handleErrorThrow}>
            <img
              src={ConnectifyLogo}
              className="connectify-logo"
              alt="Connectify Logo"
            />
          </IconButton>
        </Box>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
