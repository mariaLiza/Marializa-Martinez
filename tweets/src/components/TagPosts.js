import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { AuthContext } from "../providers/AuthContext";

const TagPosts = ({ tagPosts }) => {
  const { currentUser, token, loading } = useContext(AuthContext);
  const { API } = apiURL();
  //   const { tagPosts } = useState([]);

  useEffect(() => {
    debugger;

    //   debugger
  }, [tagPosts]);

  if (loading) return <div>Loading...</div>;

  return <div></div>;
};

export default TagPosts;
