import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthContext";
import { apiURL } from "../util/apiURL";
import LeftSideBar from "./LeftSideBar";
import UserProfileInfo from "./UserProfileInfo";
import UserPosts from "./UserPosts";
import Footer from "../components/Footer";
import "../css/UserProfile.css";

const UserProfile = () => {
  const API = apiURL();
  const [user, setUser] = useState({});
  const { token, currentUser, loading } = useContext(AuthContext);

  useEffect(() => {
    if (loading) return <div>Loading...</div>;
    const fetchUserById = async () => {
      let res = await axios({
        method: "get",
        url: `${API}/api/users/${currentUser.uid}`,
        headers: {
          AuthToken: token,
        },
      });
      console.log(currentUser.uid, "current uid");
      setUser(res.data.user);
      console.log(res.data.user);
    };
    fetchUserById();
  }, []);

  return (
    <div className="userProfileMainDiv">
      <LeftSideBar />
      <UserProfileInfo user={user} />
      <UserPosts />
      <Footer />
    </div>
  );
};

export default UserProfile;
