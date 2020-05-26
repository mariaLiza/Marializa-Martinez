import React from "react";
import { NavLink } from "react-router-dom";
import "../css/LeftSideBar.css";
import birdhouse from "../images/sidebarIcons/birdhouse white.png";
import profile from "../images/sidebarIcons/profile white.png";
import bell from "../images/sidebarIcons/bell-2-xl.png";
import bookmark from "../images/sidebarIcons/bookmark-5-xl.png";
import email from "../images/sidebarIcons/email-12-xl.png";
import hashtag from "../images/sidebarIcons/hashtag white.png";
import lists from "../images/sidebarIcons/lists.png";
import morecircle from "../images/sidebarIcons/morecircle white.png";

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
              <img id="hash" src={hashtag} alt="explore" />
            </li>
            <li>
              <img id="bell" src={bell} alt="notifications" />
            </li>
            <li>
              <img id="mail" src={email} alt="messages" />
            </li>
            <li>
              <img id="bookMark" src={bookmark} alt="bookmarks" />
            </li>
            <li>
              <img id="listIcon" src={lists} alt="lists" />
            </li>
            <li>
              <NavLink className="link" exact to="/profile">
                <img id="userProfile" src={profile} alt="profile" />
              </NavLink>
            </li>
            <li>
              <img id="moreCircle" src={morecircle} alt="more" />
            </li>
          </ul>
          <ul id="leftSideText">
            <li>
              <NavLink className="link" exact to="/">
                <p id="leftHomeText">Home</p>
              </NavLink>
            </li>
            <li>Explore</li>
            <li>Notifications</li>
            <li>Messages</li>
            <li>Bookmarks</li>
            <li>Lists</li>
            <li>
              <NavLink className="link" exact to="/profile">
                <p id="leftProfileText">Profile</p>
              </NavLink>
            </li>
            <li>More</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default LeftSideBar;
