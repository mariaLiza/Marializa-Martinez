import React, { useState, useContext } from "react";
import axios from "axios";
import { NavLink, useHistory } from "react-router-dom";
import { useInput } from "../util/customHooks";
import { apiURL } from "../util/apiURL";
import { signUp } from "../util/firebaseFunctions";
import "../css/SignUp.css";
import whiteBird from "../images/utilityIcons/whiteBird.png";
import GetDatePicker from "./DatePicker";
import { AuthContext } from "../providers/AuthContext";

const Signup = () => {
  const { currentUser, loading } = useContext(AuthContext);

  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const bio = useInput("");
  const fullName = useInput("");
  // const profilePic = useInput(null);
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
      // if (res.data.user.id === currentUser.uid) {
      //   res.data.user = currentUser;
      // }
      setUser(res.data.user[0]);
      // debugger;
      history.push("/profile");
      // console.log(user, "user")
      // console.log(res.data.user, "resuser")
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
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
            id="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <label className="suLabel" id="pwLabel">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            autoComplete="on"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />{" "}
          <input type="text" {...userName} placeholder="Username" />
          <input type="text" {...fullName} placeholder="Full Name" />
          <textarea rows="4" cols="40" placeholder="Bio" {...bio}></textarea>
          <button id="nextBtn" type="submit">
            Next
          </button>
        </form>
        {/* <GetDatePicker /> */}
      </div>
    </>
  );
};

export default Signup;
