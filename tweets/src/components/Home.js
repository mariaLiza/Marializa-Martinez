import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import RightSideBar from "./RightSideBar";
import LeftSideBar from "./LeftSideBar";
import "../css/Home.css";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  const displayRightSideBar = () => {
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
        </>
      );
    }
  };

  return (
    <>
      {displayRightSideBar()}
      <div>Home Page</div>
    </>
  );
};

export default Home;
