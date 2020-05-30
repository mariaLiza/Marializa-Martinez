import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import profilePic from "../images/sidebarIcons/profile white.png";
import "../css/MakeTweet.css";
import barChart from "../images/makeTweetIcons/bar-chart-2-xl.png";
import emoticon from "../images/makeTweetIcons/emoticon-30-xl.png";
import gifInsert from "../images/makeTweetIcons/gif_insert.png";
import imgInsert from "../images/makeTweetIcons/img_insert.png";
import axios from "axios";

const MakeTweets = () => {
  const { currentUser } = useContext(AuthContext);


const createTweet = async () => {
    try {
let res = await axios({
    method: "post",
    url: `${API}/api/post`
})
    } catch (err) {
        console.log(err)
    }
}


  return (
    <>
      <div id="divMakeTweet" className="makeTweetDiv">
        <NavLink exact to="/profile">
          <p id="xOut">x</p>
        </NavLink>
        <form id="formMakeTweet" className="makeTweetForm">
          <div id="formDiv">
            <img
              id="makeTweetProfilePic"
              src={profilePic}
              alt="profile image"
            />
            <label id="makeTweetLabel">What's happening?</label>
          </div>

          <input id="tweetInput" type="text" />
        </form>
        <div className="makeTweetIcons">
          <ul className="iconListMT">
            <li>
              <img src={barChart} alt="chart" />
            </li>
            <li>
              <img src={emoticon} alt="emoticon" />
            </li>
            <li>
              <img src={gifInsert} alt="gif" />
            </li>
            <li>
              <img src={imgInsert} alt="img" />
            </li>
          </ul>
          <button id="submitTweetBtn">Tweet</button>
        </div>
      </div>
    </>
  );
};

export default MakeTweets;
