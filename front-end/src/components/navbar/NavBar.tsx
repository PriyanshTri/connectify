import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import "./NavBar.scss";
// @ts-ignore
import ConnectifyLogo from "../../assets/Connectify-logo.png"
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";

function AppAppBar({handleLoading}: {handleLoading: () => void}){
  const navigateTo = useNavigate();

  const handleErrorThrow = async () => {
    handleLoading();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    navigateTo("/");
  };

  return (
    <div>
      <AppBar position="fixed" className="app-bar">
        {/* @ts-ignore */}
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
