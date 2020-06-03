import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { apiURL } from "../util/apiURL";
// import { AuthContext } from "../providers/AuthContext";
import profilePic from "../images/sidebarIcons/profile white.png";
import "../css/PublicFeed.css";

const PublicFeed = () => {
  const API = apiURL();
  const [publicFeed, setPublicFeed] = useState([]);

  useEffect(() => {
    const showAllPosts = async () => {
      try {
        let res = await axios({
          method: "get",
          url: `${API}/api/posts`,
        });
        setPublicFeed(res.data.postsAll);
        // debugger
      } catch (err) {
        console.log(err);
      }
    };
    showAllPosts();
  }, []);

  let publicFeedList = publicFeed.map((post, i) => {
    return (
      <div key={i} className="allPostsListDiv">
        <div className="rowContainer">
          <p id="picP">
            {" "}
            <img id="postProfilePic" src={profilePic} alt="profile image" />
          </p>
          <p id="userNameP">@{post.username}</p>
          <p id="dateStampP">{post.created_at}</p>
        </div>
        <p id="allPostBodyP">{post.body}</p>
      </div>
    );
  });

  return (
    <>
      <div>{publicFeedList}</div>
    </>
  );
};

export default PublicFeed;
