import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import RightSideBar from "./RightSideBar";
import LeftSideBar from "./LeftSideBar";
import HomeFeed from "./HomeFeed";
import PublicFeed from "./PublicFeed";
import Footer from "./Footer";
import "../css/Home.css";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  const displaySideBar = () => {
    if (!currentUser) {
      return (
        <>
          <PublicFeed />
          <RightSideBar />
        </>
      );
    } else {
      return (
        <>
          <HomeFeed />
          <LeftSideBar />
        </>
      );
    }
  };

  return (
    <>
      <div id="mainHomeDiv">
        {displaySideBar()}
      
        <Footer />
      </div>
    </>
  );
};

export default Home;
