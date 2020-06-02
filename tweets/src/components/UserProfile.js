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

  useEffect(() => {
    const fetchUserById = async () => {
      let res = await axios({
        method: "get",
        url: `${API}/api/users/${currentUser.uid}`,
        headers: {
          AuthToken: token,
        },
      });
      setUser(res.data.user);
    };
    fetchUserById();
  }, []);

  return (
    <>
      <LeftSideBar />
      <UserProfileInfo />
      <UserPosts />
    </>
  );
};

export default UserProfile;
