import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import "../css/UserPosts.css";

const UserPosts = () => {
  const { currentUser, token, loading } = useContext(AuthContext);
  const API = apiURL();
  const [userPosts, setUserPosts] = useState([]);
  const [postTag, setPostTag] = useState("");

  useEffect(() => {
    if (loading) return <div>Loading...</div>;
    const getUserPosts = async () => {
      try {
        let res = await axios({
          method: "get",
          url: `${API}/api/users/${currentUser.uid}/posts`,
          headers: {
            AuthToken: token,
          },
        });
        setUserPosts(res.data.posts);
      } catch (err) {
        console.log(err);
      }
    };
    getUserPosts();
  }, []);

  const fixDate = (number) => {
    const stringDate = number.toString();
    let newDate = new Date(stringDate);
    return newDate.toDateString();
  };

  let userPostList = userPosts.map((post, i) => {
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
          <Link exact to={`/users/${post.username}`}>
            <p id="userNameP">@{post.username}</p>
          </Link>

          <p id="dateStampP">{fixDate(post.created_at)}</p>
        </div>
        <p id="postBodyP">{post.body}</p>
        {post.tags[0] ? <p id="tag">#{post.tags[0]}</p> : <p></p>}
      </div>
    );
  });

  return (
    <>
      <div id="userPostsDiv">
        <div>{userPostList}</div>
      </div>
    </>
  );
};

export default UserPosts;
