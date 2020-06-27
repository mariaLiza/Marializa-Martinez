import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
// import { apiURL } from "../util/apiURL";
import { AuthContext } from "../providers/AuthContext";
// import DisplayTagPosts from "../components/DisplayTagPosts";

const TagPosts = ({ tagPosts }) => {
  const { loading } = useContext(AuthContext);
  // const { search } = useParams();
  // const { API } = apiURL();
  // const [tagPosts, setTagPosts] = useState([]);
  // const { tagPosts } = useParams();
  // debugger;
  console.log(tagPosts);

  // useEffect(() => {
  // debugger
  // }, [tagPosts])

  const results = tagPosts.map((post, i) => {
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
        <p id="tag">#{post.tag}</p>
      </div>
    );
  });

  if (loading) return <div>Loading...</div>;
  //
  return <div>
  <div>{results}
  
  </div>
  </div>;
};

export default TagPosts;
