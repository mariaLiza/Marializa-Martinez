import React, { useState, useEffect, useContext } from "react";
import "../css/UserProfile.css";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import LeftSideBar from "./LeftSideBar";
import UserProfileInfo from "./UserProfileInfo";
import UserPosts from "./UserPosts";
import { AuthContext } from "../providers/AuthContext";

const UserProfile = () => {
  const API = apiURL();
  const [user, setUser] = useState({});
  const { token, currentUser } = useContext(AuthContext);

  const fetchUserById = async () => {
    let res = await axios({
      method: "get",
      url: `${API}/api/users/${currentUser.uid}`,
      headers: {
        AuthToken: token,
      },
    });
    if (res.data.user.id === currentUser.uid) {
      return ([currentUser] = [currentUser, ...res.data.user[0]]);
    }
    console.log(user, "user");
    setUser(currentUser);
  };
  fetchUserById();

  return (
    <>
      <LeftSideBar />
      <UserProfileInfo />
      <UserPosts />
    </>
  );
};

export default UserProfile;
