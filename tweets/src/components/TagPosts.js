import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { AuthContext } from "../providers/AuthContext";

const TagPosts = () => {
  const API = apiURL();
  const { loading } = useContext(AuthContext);
  const [tagPosts, setTagPosts] = useState([]);
  const { searchValue } = useParams();

  console.log(searchValue);


  useEffect(() => {
    const getTags = async () => {
      try {
        let res = await axios.get(`${API}/api/tags/${searchValue}`);
        setTagPosts(res.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    getTags();
  }, []);

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
  return (
    <div>
      <div>{results}</div>
    </div>
  );
};

export default TagPosts;
