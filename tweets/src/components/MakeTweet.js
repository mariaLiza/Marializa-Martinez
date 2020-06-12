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
  // const [postId, setPostId] = useState("");
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
        // debugger;
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
      // console.log(currentUser.uid, "current");
      formData.append("body", body.value);
      formData.append("created_at", new Date().toString());

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      let res = await axios.post(`${API}/api/posts`, formData, config);
      setNewPost(res);
      // let idPost = parseInt(res.data.newPost.id)

      let postId = res.data.newPost.id

      let tags = tagOne.value
      console.log(tags, "tags");
     
      let tagsRes = await axios.post(`${API}/api/tags`, {
        post_id: parseInt(postId),
        tags,
      });
      // setNewTag(tagsRes);
      console.log(tagOne.value, "tag1val");
      console.log(postId, "postid");
      console.log(tagsRes, "tagsRes");
      debugger;
      // } catch (err) {
      //   console.log(err);
      // }
      // };
      // postTag();

      history.push("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  // const onChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  return (
    <>
      <div id="divMakeTweet" className="makeTweetDiv">
        <NavLink exact to="/profile">
          <p id="xOut">x</p>
        </NavLink>
        <form
          onSubmit={handleSubmit}
          id="formMakeTweet"
          className="makeTweetForm"
        >
          <div id="formDiv">
            <img
              id="makeTweetProfilePic"
              src={profilePic}
              alt="profile image"
            />
            {/* <label id="makeTweetLabel">What's happening?</label> */}
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
                {/* <input type="file" name="myImage" onChange={onChange} /> */}
                <img src={imgInsert} alt="img" />
              </li>
            </ul>
            <input type="text" placeholder="#" {...tagOne} />
            <button type="submit" id="submitTweetBtn">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MakeTweets;
