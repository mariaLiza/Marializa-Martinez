import React, { useState } from "react";
import axios from "axios";
import { NavLink, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import { signUp } from "../util/firebaseFunctions";
import "../css/SignUp.css";
import whiteBird from "../images/utilityIcons/whiteBird.png";
import GetDatePicker from "./DatePicker";

const Signup = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const API = apiURL();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await signUp(email, password);
      await axios.post(`${API}/api/users`, {
        id: res.user.uid,
        email,
      });
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div id="signUpDiv">
        <NavLink exact to="/">
          <img id="bird" src={whiteBird} alt="home" />
        </NavLink>
        <h1 id="create">Create your account</h1>
        {error ? <div>{error}</div> : null}
        <form class="form" id="formInp" onSubmit={handleSubmit}>
          <label class="suLabel" id="emLabel">
            Email
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <label class="suLabel" id="pwLabel">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            autoComplete="on"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button id="nextBtn" type="submit">
            Next
          </button>
        </form>
        <GetDatePicker />
      </div>
    </>
  );
};

export default Signup;
