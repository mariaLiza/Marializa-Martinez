import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AuthProvider from "./providers/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            <UserProfile />
          </Route>

          {/* <Route path="*">
          <Error />
        </Route> */}
        </Switch>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
