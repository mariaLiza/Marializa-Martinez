import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import RightSideBar from "./RightSideBar";
import LeftSideBar from "./LeftSideBar";
import HomeFeed from "./HomeFeed";
import "../css/Home.css";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  const displaySideBar = () => {
    if (!currentUser) {
      return (
        <>
          <RightSideBar />
        </>
      );
    } else {
      return (
        <>
          <LeftSideBar />
          <HomeFeed />
        </>
      );
    }
  };

  return (
    <>
      {displaySideBar()}
      <div>Home Page</div>
    </>
  );
};

export default Home;
