import React, { useState, useContext, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
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
  const { currentUser, token } = useContext(AuthContext);
  const API = apiURL();
  const body = useInput("");
  const tagOne = useInput("");
  const [userId, setUserId] = useState("");
  const [newPost, setNewPost] = useState("");
  const [newTag, setNewTag] = useState("");
  const history = useHistory();

  useEffect(() => {
    const getUser = async () => {
      try {
        let res = await axios({
          method: "get",
          url: `${API}/api/users/${currentUser.uid}`,
          headers: {
            AuthToken: token,
          },
        });
        setUserId(res.data.user.id);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);
  console.log(userId, "userid now");
  console.log(currentUser.uid, "currentuserid now");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      // formData.append("myImage", file);
      formData.append("poster_id", userId);
      formData.append("body", body.value);
      formData.append("created_at", new Date().toString());

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      let res = await axios.post(`${API}/api/posts`, formData, config);
      setNewPost(res);

      let postId = res.data.newPost.id;

      let tags = tagOne.value;

      let tagsRes = await axios.post(`${API}/api/tags`, {
        post_id: parseInt(postId),
        tags,
      });

      console.log(tagOne.value, "tag1val");
      console.log(postId, "postid");
      console.log(tagsRes, "tagsRes");

      history.push("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="makeTweetMain">
      <div id="divMakeTweet" className="makeTweetDiv">
        <form
          onSubmit={handleSubmit}
          id="formMakeTweet"
          className="makeTweetForm"
        >
        <NavLink exact to="/profile" className="xContainer">
          <p id="xOut">x</p>
        </NavLink>
          <div id="formDiv">
            <img
              id="makeTweetProfilePic"
              src={
                "https://ya-webdesign.com/transparent250_/blank-profile-picture-png-2.png"
              }
              alt="profile image"
            />
          </div>

          <textarea
            {...body}
            id="tweetInput"
            rows="7"
            cols="20"
            placeholder="What's happening?"
            type="text"
          ></textarea>
          <div className="makeTweetIcons">
            <label id="tagLabel">
              Enter a hashtag for your post
              <input id="tagInp" type="text" placeholder="#" {...tagOne} />
            </label>
            <button type="submit" id="submitTweetBtn">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeTweets;
