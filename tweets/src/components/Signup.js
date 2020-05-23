import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const history = useHistory();
  const API = apiURL();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
    //sign up with firebase and send res to our backend
  };

  return (
    <>
      <div>
        <h1>Sign up</h1>
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
