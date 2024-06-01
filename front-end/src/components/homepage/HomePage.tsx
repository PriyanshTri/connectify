import { useNavigate } from "react-router-dom";
import { World } from "../globe/Globe.js";
import {
  GlobalConfigData,
  SampleArcsData,
} from "@/constants/globe-constants/Globe.js";
import { Box, Container } from "@mui/material";
import CommonButton from "../common-button/CommonButton.js";
import TypedComponent from "./TypedComponent.js";
import message from "./../../assets/message.svg";
import HomepageCard from "../image-card/HomepageCard.js";

import "./HomePage.scss";

const HomePage = () => {
  const navigate = useNavigate();

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
        <HomepageCard
          title="Connect social Media"
          url={message}
          paragraph="you can connect all your social media account together but just a touch of a button. This gives you immense power."
        />
        <HomepageCard
          title="Connect social Media"
          url={message}
          paragraph="you can connect all your social media account together but just a touch of a button. This gives you immense power."
        />
        <HomepageCard
          title="Connect social Media"
          url={message}
          paragraph="you can connect all your social media account together but just a touch of a button. This gives you immense power."
        />
        <HomepageCard
          title="Connect social Media"
          url={message}
          paragraph="you can connect all your social media account together but just a touch of a button. This gives you immense power."
        />
        <HomepageCard
          title="Connect social Media"
          url={message}
          paragraph="you can connect all your social media account together but just a touch of a button. This gives you immense power."
        />
        <HomepageCard
          title="Connect social Media"
          url={message}
          paragraph="you can connect all your social media account together but just a touch of a button. This gives you immense power."
        />
      </div>
      <Footer/>
    </Container>
  );
};

const Footer = () => {
  return (
    <div className="footer-container">
      Connectify | &copy; 2024 All rights reserved!
    </div>
  );
};

export default HomePage;
