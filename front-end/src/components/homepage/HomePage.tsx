import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
// implemented lazy loading on World component
const World = React.lazy(() =>
  import("../globe/Globe.js").then((module) => ({ default: module.default })),
);
import {
  GlobalConfigData,
  SampleArcsData,
} from "@/constants/globe-constants/Globe.js";

//ts-ignore
import LoginForm from "../social-media-login/LoginForm.js";
import { Box, Container } from "@mui/material";
import CommonButton from "../common-button/CommonButton.js";
import TypedComponent from "./TypedComponent.js";
//@ts-ignore
import message from "./../../assets/message.svg";
import HomepageCard from "../image-card/HomepageCard.js";

import "./HomePage.scss";
import Loader from "../loader/Loader.js";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container className="homepage">
      <Box className="globe-container">
        <Suspense fallback={<Loader loading={true} />}>
          <World
            globeConfig={GlobalConfigData}
            data={SampleArcsData}
            clsName="world"
          />
        </Suspense>
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

      <LoginForm />
      <Footer />
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
