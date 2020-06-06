import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { AuthContext } from "../providers/AuthContext";
import profilePic from "../images/sidebarIcons/profile white.png";
// import MakeTweet from "../components/MakeTweet";
import "../css/HomeFeed.css";

const HomeFeed = () => {
  const API = apiURL();
  const { currentUser } = useContext(AuthContext);
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const showAllPosts = async () => {
      try {
        let res = await axios({
          method: "get",
          url: `${API}/api/posts`,
        });
        setFeed(res.data.postsAll);
        // debugger
      } catch (err) {
        console.log(err);
      }
    };
    showAllPosts();
  }, []);

  let feedList = feed.map((post, i) => {
    return (
      <div key={i} className="allPostsListDiv">
        <div className="rowContainerHomeFeed">
          <p id="picP">
            {" "}
            <img
              id="postProfilePic"
              src={
                "https://ya-webdesign.com/transparent250_/blank-profile-picture-png-2.png"
              }
              alt="profile image"
            />
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
      <div>
        <div id="exploreH1">Explore <p id="happeningP">Happening Right Now</p></div>
        <div> {feedList}</div>
      </div>
    </>
  );
};

export default HomeFeed;
