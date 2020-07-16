import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import { apiURL } from "../util/apiURL";
import axios from "axios";
// import profilePic from "../images/sidebarIcons/profile white.png";
import "../css/UserPosts.css";

const WhosPosts = ({ username }) => {
  const { loading } = useContext(AuthContext);
  const API = apiURL();
  const [usersPosts, setUsersPosts] = useState([]);
  const [postTag, setPostTag] = useState("");

  useEffect(() => {
    const getUserPosts = async () => {
      try {
        let res = await axios({
          method: "get",
          url: `${API}/api/posts`,
        });
        setUsersPosts(res.data.postsAll);
      } catch (err) {
        console.log(err);
      }
    };
    getUserPosts();
  }, [username]);

  let usersPostList = usersPosts.map((post, i) => {
    if (username === post.username)
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
          <p id="postBodyP">{post.body}</p>
          {post.tag ? <p id="tag">#{post.tag}</p> : <p></p>}
        </div>
      );
  });

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div id="userPostsDiv">
        <h1 id="userTweetsH1">Tweets</h1>
        <div>{usersPostList}</div>
      </div>
    </>
  );
};

export default WhosPosts;
