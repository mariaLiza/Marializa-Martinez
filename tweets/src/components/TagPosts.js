import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import { AuthContext } from "../providers/AuthContext";
import axios from "axios";
import "../css/TagPosts.css";

const TagPosts = () => {
  const API = apiURL();
  const { loading } = useContext(AuthContext);
  const [tagPosts, setTagPosts] = useState([]);
  const { searchValue } = useParams();

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

  const fixDate = (number) => {
    const stringDate = number.toString();
    let newDate = new Date(stringDate);
    return newDate.toDateString();
  };

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
          <a href={`/users/${post.username}`}>
            <p id="userNameP">@{post.username}</p>
          </a>

          <p id="dateStampP">{fixDate(post.created_at)}</p>
        </div>
        <p id="postBodyP">{post.body}</p>
        <p id="tag">#{post.tag}</p>
      </div>
    );
  });

  if (loading) return <div>Loading...</div>;
  return (
    <div className="tagPostsDiv">
      <div className="tagPostsContainer">{results}</div>
    </div>
  );
};

export default TagPosts;
