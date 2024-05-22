import { Button, Container, Typography, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import LostAstronaut from "../assets/lost-astronaut.svg";

const PageNotFound = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src={LostAstronaut}
          alt="Lost astronaut"
          style={{ height: 200, filter: "" }}
        />
      </Box>
      <Typography variant="h3" component="h1" sx={{ mb: 3 }}>
        Whoops! Looks like you're lost in space.
      </Typography>

      <Typography variant="body1" sx={{ mt: 3 }}>
        The page you requested was not found. It might be unavailable or you
        might have typed the address incorrectly.
      </Typography>
      <Stack direction="row" sx={{ mt: 3 }}>
        <Button variant="contained" component={Link} to="/">
          Go Back To Earth
        </Button>
      </Stack>
    </Container>
  );
};

export default PageNotFound;
