import React, { useState } from "react";
// import axios from "axios";
import { useHistory } from "react-router-dom";
import {login} from "../util/firebaseFunctions"
// import { apiURL } from "../util/apiURL";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const history = useHistory();
  // const API = apiURL();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password)
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
    //sign in with firebase then change route
  };

  return (
    <>
      <div>
        <h1>Log In</h1>
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
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
