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
        <World
          globeConfig={GlobalConfigData}
          data={SampleArcsData}
          clsName="world"
        />
        <div className="Homepage-title-box">
          <TypedComponent />
          <CommonButton
            title="Lets dive in!"
            onClick={() => navigate("/login")}
          />
        </div>
      </Box>
      <div className="image-3d-tile-container">
        <ThreeDCard
          imageUrl={message}
          imageAlt="message"
          clickHandler={navigateToLogin}
          aboveText="Feeling Like A Social Media Juggling Act?"
          belowText="Don't Drop The Ball (Or Your Sanity)! Manage All Your Social Accounts From One Central Hub. Post, Schedule, And Receive Notifications - All In One Place"
        />
        <ThreeDCard
          imageUrl={message}
          imageAlt="message"
          clickHandler={navigateToLogin}
          aboveText="Become A Social Media Superhero!"
          belowText="Stop Struggling With Multiple Logins And Endless Scrolling. Be The Hero Your Audience Needs. Post Consistently, Engage Effortlessly, And Dominate The Social Media World!"
        />
        <ThreeDCard
          imageUrl={message}
          imageAlt="message"
          clickHandler={navigateToLogin}
          aboveText="Stop the Social Media FOMO! "
          belowText="Ditch The Constant App-Switching And Information Overload. Manage All Your Notifications In One Place."
        />
        <ThreeDCard
          imageUrl={message}
          imageAlt="message"
          clickHandler={navigateToLogin}
          aboveText="Be a Social Media Maestro!"
          belowText="Play All The Right Notes With Our All-In-One Platform. Schedule Content, Analyze Engagement, And Make Beautiful Music (Metaphorically) Across All Your Social Channels."
        />
      </div>
    </Container>
  );
};

export default HomePage;
