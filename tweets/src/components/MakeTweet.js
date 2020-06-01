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
import { apiURL } from "../util/apiURL";
import { useInput } from "../util/customHooks";

const MakeTweets = () => {
  const { currentUser } = useContext(AuthContext);
  const API = apiURL();
  const [file, setFile] = useState();
  const body = useInput();

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();

      formData.append("myImage", file);
      formData.append("poster_id", currentUser.uid);
      formData.append("caption", body.value);
      formData.append("created_at", new Date().toString());

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      let res = await axios.post(`/${API}/api/posts`, formData, config);
    } catch (err) {
      console.log(err);
    }
  };

  // const createTweet = async () => {
  //   try {
  //     let res = await axios({
  //       method: "post",
  //       url: `${API}/api/post`,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <div id="divMakeTweet" className="makeTweetDiv">
        <NavLink exact to="/profile">
          <p id="xOut">x</p>
        </NavLink>
        <form onSubmit={onSubmit} id="formMakeTweet" className="makeTweetForm">
          <div id="formDiv">
            <img
              id="makeTweetProfilePic"
              src={profilePic}
              alt="profile image"
            />
            {/* <label id="makeTweetLabel">What's happening?</label> */}
          </div>

          <textarea
            id="tweetInput"
            rows="7"
            cols="20"
            placeholder="What's happening?"
            type="text"
            {...body}
          ></textarea>
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
              <input type="file" name="myImage" onChange={onChange} />
              <img src={imgInsert} alt="img" />
            </li>
          </ul>
          <button onClick={onSubmit} type="type" id="submitTweetBtn">
            Tweet
          </button>
        </div>
      </div>
    </>
  );
};

export default MakeTweets;
