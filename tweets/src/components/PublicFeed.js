import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { AuthContext } from "../providers/AuthContext";
import profilePic from "../images/sidebarIcons/profile white.png";
import "../css/PublicFeed.css";

const PublicFeed = () => {
  const { loading } = useContext(AuthContext);
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
      } catch (err) {
        console.log(err);
      }
    };
    showAllPosts();
    if (loading) return <div>Loading...</div>;
  }, []);

  let publicFeedList = publicFeed.map((post, i) => {
    if (loading) return <div>Loading...</div>;
    return (
      <div key={i} className="userPostsListDiv">
      <div className="rowContainer">
        <p id="picP">
          {" "}
          <img
            id="postPublicProfPic"
            src={
              "https://ya-webdesign.com/transparent250_/blank-profile-picture-png-2.png"
            }
            alt="profile image"
          />
        </p>
        <p id="userNamePublicP">@{post.username}</p>
        <p id="dateStampPublicP">{post.created_at}</p>
        </div>
        <p id="allPostBodyPublicP">{post.body}</p>
        {post.tag ? <p id="tag">#{post.tag}</p> : <p></p>}
      </div>
    );
  });

  return (
    <div className="publicPostsListDiv">
      <div className="exploreTwitter">
        <h2 id="exploreH2">Explore</h2>
        <p id="publicHappeningNow">Happening Right Now</p>
      </div>
      <div className="divHolder">{publicFeedList}</div>
      
    </div>
  );
};

export default PublicFeed;
