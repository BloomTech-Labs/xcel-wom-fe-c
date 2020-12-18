import React from "react";
import RenderLandingPage from "./RenderLandingPage";
import Navbar from "./Navbar";
import LandingBodyPage from "./landingBodyPage";
import { Image } from "antd";
import { Layout } from "antd";
const { Header } = Layout;

function LandingContainer({ LoadingComponent }) {
  return (
    <Layout style={mainLayout}>
      <Header style={headerStyle}>
        <div style={logo}>
          <Image
            width="150px"
            src="https://files.slack.com/files-pri/TSZCHB482-F01H75FB0UT/image.png"
          />
        </div>
        <Navbar />
      </Header>
      <RenderLandingPage />
      <LandingBodyPage />
    </Layout>
  );
}

let mainLayout = {
  padding: "0",
  height: "auto",
  lineHeight: "1.6"
};

let headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 0",
  background: "white",
  height: "150px"
};

let logo = {
  display: "flex",
  justifyContent: "flex-start",
  marginLeft: "4%"
};
export default LandingContainer;
