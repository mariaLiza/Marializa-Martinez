import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AuthProvider from "./providers/AuthContext";
import MakeTweet from "./components/MakeTweet";
import TagPosts from "./components/TagPosts"
import { AuthRoute, ProtectedRoute } from "./util/routeUtil";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <AuthRoute exact path="/signup">
            <Signup />
          </AuthRoute>
          <AuthRoute exact path="/login">
            <Login />
          </AuthRoute>
          <ProtectedRoute exact path="/profile">
            <UserProfile />
          </ProtectedRoute>
          <ProtectedRoute exact path="/maketweet">
            <MakeTweet />
          </ProtectedRoute>
          <ProtectedRoute exact path="/tagposts/:tagsPosts">
            <TagPosts />
          </ProtectedRoute>

          {/* <Route path="*">
          <Error />
        </Route> */}
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
