import { Container, Typography, Box } from "@mui/material";
import LostAstronaut from "@/assets/lost-astronaut.svg";
import "./PageNotFound.scss";
import CommonButton from "@/components/common-button/CommonButton";
import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigateTo = useNavigate();
  const handleClick = () => {
    navigateTo("/");
  };

  return (
    <Container className="error-container">
      <Box className="image-container">
        <img
          src={LostAstronaut}
          alt="Lost astronaut"
          className="lost-astronaut-image"
        />
      </Box>
      <Typography variant="h3" component="h1">
        Whoops! Looks like you're lost in space.
      </Typography>

      <Typography variant="body1">
        The page you requested was not found. It might be unavailable or you
        might have typed the address incorrectly.
      </Typography>
      <CommonButton onClick={handleClick} title="Lets go back to earth"/>
    </Container>
  );
};

export default PageNotFound;
