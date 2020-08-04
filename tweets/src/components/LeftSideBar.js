import React from "react";
import { NavLink } from "react-router-dom";
import "../css/LeftSideBar.css";
import birdhouse from "../images/sidebarIcons/birdhouse white.png";
import profile from "../images/sidebarIcons/profile white.png";

const LeftSideBar = () => {
  return (
    <>
      <div id="leftSideDiv">
        <nav id="leftNav">
          <ul id="leftSideIcons">
            <li>
              <NavLink className="link" exact to="/">
                <img id="birdHouse" src={birdhouse} alt="home" />
              </NavLink>
            </li>

            <li>
              <NavLink className="link" exact to="/profile">
                <img id="userProfile" src={profile} alt="profile" />
              </NavLink>
            </li>
          </ul>
          <ul id="leftSideText">
            <li>
              <NavLink className="link" exact to="/">
                <p id="leftHomeText">Home</p>
              </NavLink>
            </li>

            <li>
              <NavLink className="link" exact to="/profile">
                <p id="leftProfileText">Profile</p>
              </NavLink>
            </li>
          </ul>{" "}
        </nav>
          <NavLink exact to="/maketweet">
            <p id="leftSideTweetBtn">Tweet</p>
          </NavLink>
      </div>
    </>
  );
};

export default LeftSideBar;
