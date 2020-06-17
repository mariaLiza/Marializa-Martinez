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
        debugger;
      } catch (err) {
        console.log(err);
      }
    };
    showAllPosts();
  }, []);

  let publicFeedList = publicFeed.map((post, i) => {
    return (
      <div key={i} className="publicPostsListDiv">
        <div className="rowContainerPublic">
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
        <p id="tag">#{post.tag}</p>
      </div>
    );
  });

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div>
        <div id="exploreH2">
          Explore <p id="publicHappeningNow">Happning Right Now</p>
        </div>
        <div className="publicFeedDiv">{publicFeedList}</div>
      </div>
    </>
  );
};

export default PublicFeed;
