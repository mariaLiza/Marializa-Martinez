import React, { useState, useEffect, useContext } from "react";
import "../css/UserProfile.css";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import LeftSideBar from "./LeftSideBar";
import UserProfileInfo from "./UserProfileInfo"
import { AuthContext } from "../providers/AuthContext";
import UserPosts from "./UserPosts";

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
      // debugger;
      //user arr in res.data.user is empty but query is returned successful???
      setUser(res.data.user);
      // console.log(user, "user"
    };
    fetchUserById();
  }, []);

  return (
    <>
      <LeftSideBar />
      <UserProfileInfo />
      <UserPosts/>
      {/* <div>
        {user.map((user) => {
          return <li key={user.id}>{user.full_name}</li>;
        })}
      </div> */}
    </>
  );
};

export default UserProfile;
