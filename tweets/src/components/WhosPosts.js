import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import { apiURL } from "../util/apiURL";
import axios from "axios";
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

  const fixDate = (number) => {
    const stringDate = number.toString();
    let newDate = new Date(stringDate);
    return newDate.toDateString();
  };

  let usersPostList = usersPosts.map((post, i) => {
    if (username === post.username)
      return (
        <div key={i} className="userPostsListDiv whoProfile">
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
            <a href={`/users/${post.username}`}>
              <p id="userNameP">@{post.username}</p>
            </a>

            <p id="dateStampP">{fixDate(post.created_at)}</p>
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
