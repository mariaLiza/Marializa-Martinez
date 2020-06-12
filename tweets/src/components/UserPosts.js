import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import profilePic from "../images/sidebarIcons/profile white.png";
import "../css/UserPosts.css";

const UserPosts = () => {
  const { currentUser, token } = useContext(AuthContext);
  const API = apiURL();
  const [userPosts, setUserPosts] = useState([]);
  const [postTag, setPostTag] = useState("");

  useEffect(() => {
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

        debugger;
      } catch (err) {
        console.log(err);
      }
    };
    getUserPosts();
  }, []);

  // console.log(userPosts, "userPosts now");

  //my userpost obj=
  //   body: "mmm"
  // created_at: "2020-06-02T02:09:35.274Z"
  // id: 1
  // poster_id: "9lPiIuEHy8Wi80zlStgbd15rhE12"
  // tags: []
  // username: "sunnyBrightSkies"

  let userPostList = userPosts.map((post, i) => {
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
        <p>#{post.tags[0]}</p>
      </div>
    );
  });

  return (
    <>
      <div id="userPostsDiv">
        <h1 id="userTweetsH1">Tweets</h1>
        <div>{userPostList}</div>
      </div>
    </>
  );
};

export default UserPosts;
