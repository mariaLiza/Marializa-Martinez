import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import { signUp } from "../util/firebaseFunctions";

const Signup = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [fullName, setFullName] = useState("");
  // const [userName, setUserName] = useState("");
  // const [bio, setBio] = useState("");
  const history = useHistory();
  const API = apiURL();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await signUp(email, password);
      await axios.post(`${API}/api/users`, {
        id: res.user.uid,
        email,
        // fullName,
        // userName,
        // bio,
      });
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div>
        <h1>Sign Up</h1>
        {error ? <div>{error}</div> : null}
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            autoComplete="on"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          {/* <input
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.currentTarget.value)}
          /> */}
          {/* <input
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.currentTarget.value)}
          /> */}
          {/* <input
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.currentTarget.value)}
          /> */}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
