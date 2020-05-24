import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import RightSideBar from "./RightSideBar";
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
    }
  };

  return (
    <>
      <div>Home Page</div>
      {displayRightSideBar()}
    </>
  );
};

export default Home;
