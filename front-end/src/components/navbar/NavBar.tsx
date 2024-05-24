import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode.tsx";
import "./NavBar.scss"

// @ts-ignore
import ConnectifyLogo from "./../../assets/Connectify-logo.png";

function AppAppBar({ mode, toggleColorMode }: any) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };
  const handleErrorThrow = () => {
    return new Error("Error thrown from NavBar.tsx");
  }
  const handleKeyDown = (event: { key: string; }) => {
    if (event.key === "Enter" || event.key === " ") {
      handleErrorThrow();
    }
  }

  return (
    <div>
      <AppBar
        position="fixed"
        className="app-bar"
      >
        <Container>
          <Toolbar>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "start",
                // ml: "-18px",
                px: 0,
              }}
            >
              <img
                role="button"
                src={ConnectifyLogo}
                style={{ height: "32px"}}
                alt="Connectify Logo"
                onClick={handleErrorThrow}
                onKeyDown={handleKeyDown}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
