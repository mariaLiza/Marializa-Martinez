import React, { useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import { useInput } from "../util/customHooks";
import { apiURL } from "../util/apiURL";
import { signUp } from "../util/firebaseFunctions";
import axios from "axios";
import whiteBird from "../images/utilityIcons/whiteBird.png";
import "../css/SignUp.css";

const Signup = () => {
  const { currentUser, loading } = useContext(AuthContext);

  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const bio = useInput("");
  const fullName = useInput("");
  const userName = useInput("");
  const history = useHistory();
  const API = apiURL();
  const [user, setUser] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await signUp(email, password);
      await axios.post(`${API}/api/users`, {
        id: res.user.uid,
        email,
        fullname: fullName.value,
        username: userName.value,
        bio: bio.value,
      });
      setUser(res.data.user[0]);
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="signUpMain">
      <div id="signUpDiv">
        <NavLink exact to="/">
          <img id="bird" src={whiteBird} alt="home" />
        </NavLink>
        <h1 id="create">Create your account</h1>
        {error ? <div>{error}</div> : null}
        <form className="form" id="formInp" onSubmit={handleSubmit}>
          <label className="suLabel" id="emLabel">
            Email
          </label>
          <input
            className="suInputs"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <label className="suLabel" id="pwLabel">
            Password
          </label>
          <input
            type="password"
            className="suInputs"
            value={password}
            autoComplete="on"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />{" "}
          <label className="suLabel" id="emLabel">
            Username
          </label>
          <input type="text" {...userName} className="suInputs" />
          <label className="suLabel" id="emLabel">
            Full Name
          </label>
          <input type="text" {...fullName} className="suInputs" />
          <textarea className="bioSU" rows="4" cols="40" placeholder="Bio" {...bio}></textarea>
          <button id="nextBtn" type="submit">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
