import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../css/RightSideBar.css";
import pic from "../images/sidebarIcons/twitter_login_sidebar_illustration.png";
import { login } from "../util/firebaseFunctions";

const RightSideBar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      history.push("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div id="sbDiv">
        <form id="sbForm" class="sideBarForm" onSubmit={handleSubmit}>
          <img id="sidePic" src={pic} alt="see what's happening" />
          <h4 id="sbH">See what’s happening in the world right now</h4>
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <label id="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button type="submit">Log In</button>
          <p>or</p>
          <NavLink id="suft" exact to="/signup">
            Sign up
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default RightSideBar;
