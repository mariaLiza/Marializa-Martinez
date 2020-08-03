import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { AuthContext } from "../providers/AuthContext";
import profilePic from "../images/sidebarIcons/profile white.png";
// import MakeTweet from "../components/MakeTweet";
import "../css/HomeFeed.css";

const HomeFeed = () => {
  const API = apiURL();
  const { currentUser, loading } = useContext(AuthContext);
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
    if (loading) return <div>Loading...</div>;
  }, []);

  let feedList = feed.map((post, i) => {
    return (
      <div key={i} className="userPostsListDiv">
        <div className="rowContainer">
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
        {post.tag ? <p id="tag">#{post.tag}</p> : <p></p>}
      </div>
    );
  });

  if (loading) return <div>Loading...</div>;

  return (
    <div className="publicPostsListDiv">
      <div className="exploreTwitter">
        <h2 id="exploreH2">Explore</h2>
        <p id="publicHappeningNow">Happening Right Now</p>
      </div>
      <div className="divHolder">{feedList}</div>
    </div>
  );
};

export default HomeFeed;
