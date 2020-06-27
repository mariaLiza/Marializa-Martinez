import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import RightSideBar from "./RightSideBar";
import LeftSideBar from "./LeftSideBar";
import HomeFeed from "./HomeFeed";
import PublicFeed from "./PublicFeed";
import Footer from "./Footer";
import WhosWho from "./WhosWho";
import "../css/Home.css";

const Home = () => {
  const { currentUser, loading } = useContext(AuthContext);

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
          <WhosWho />
        </>
      );
    }
  };

  if (loading) return <div>Loading...</div>;

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
