import { useNavigate } from "react-router-dom";
import { World } from "../Globe/Globe.js";
import {
  GlobalConfigData,
  SampleArcsData,
} from "../../constants/GlobeConstants/Globe.js";
import "./HomePage.scss";
import { Box, Container } from "@mui/material";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container className="homepage">
      <Box className="globe-container">
        <World globeConfig={GlobalConfigData} data={SampleArcsData} />
      </Box>
    </Container>
  );
};

export default HomePage;

