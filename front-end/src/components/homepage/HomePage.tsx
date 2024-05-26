import { useNavigate } from "react-router-dom";
import { World } from "../globe/Globe.js";
import {
  GlobalConfigData,
  SampleArcsData,
} from "../../constants/globe-constants/Globe.js";
import { Box, Container } from "@mui/material";
import CommonButton from "../common-button/CommonButton.js";
import TypedComponent from "./TypedComponent.js";

import "./HomePage.scss";
import { ThreeDCard } from "../image-card/ThreeDCard.js";
import message from "./../../assets/message.svg";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <Container className="homepage">
      <Box className="globe-container">
        <World globeConfig={GlobalConfigData} data={SampleArcsData} />
      </Box>
      <div className="Homepage-title-box">
        <TypedComponent />
        <CommonButton
          title="Lets dive in!"
          onClick={() => navigate("/login")}
        />
      </div>
      <div className="image-3d-tile">
        <ThreeDCard
          imageUrl={message}
          imageAlt="message"
          clickHandler={navigateToLogin}
          aboveText="lets gooooo!"
          belowText="i dont know what to write but let me make it a long text by writing random shitty texts"
        />
        <ThreeDCard
          imageUrl={message}
          imageAlt="message"
          clickHandler={navigateToLogin}
          aboveText="lets gooooo!"
          belowText="i dont know what to write but let me make it a long text by writing random shitty texts"
        />
        <ThreeDCard
          imageUrl={message}
          imageAlt="message"
          clickHandler={navigateToLogin}
          aboveText="lets gooooo!"
          belowText="i dont know what to write but let me make it a long text by writing random shitty texts"
        />
        <ThreeDCard
          imageUrl={message}
          imageAlt="message"
          clickHandler={navigateToLogin}
          aboveText="lets gooooo!"
          belowText="i dont know what to write but let me make it a long text by writing random shitty texts"
        />
        <ThreeDCard
          imageUrl={message}
          imageAlt="message"
          clickHandler={navigateToLogin}
          aboveText="lets gooooo!"
          belowText="i dont know what to write but let me make it a long text by writing random shitty texts"
        />
        <ThreeDCard
          imageUrl={message}
          imageAlt="message"
          clickHandler={navigateToLogin}
          aboveText="lets gooooo!"
          belowText="i dont know what to write but let me make it a long text by writing random shitty texts"
        />
      </div>
    </Container>
  );
};

export default HomePage;
