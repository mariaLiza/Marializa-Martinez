import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { login } from "../util/firebaseFunctions";
// import { apiURL } from "../util/apiURL";
import whiteBird from "../images/utilityIcons/whiteBird.png";
import "../css/Login.css";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const history = useHistory();
  // const API = apiURL();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      history.push("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div id="logInDiv">
        {error ? <div>{error}</div> : null}
        <NavLink exact to="/">
          <img id="bird" src={whiteBird} alt="home" />
        </NavLink>
        <h1 id="title">Log in to Twitter</h1>
        <form className="lForm" id="lFormInp" onSubmit={handleSubmit}>
          <label id="email">Email</label>
          <input
            className="input"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <label id="password">Password</label>
          <input
            className="input"
            type="password"
            value={password}
            autoComplete="on"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button id="logInbtn" type="submit">
            Log In
          </button>
          <NavLink id="suft" exact to="/signup">
            Sign up for Twitter
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default Login;
