import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users/:id">
          <UserProfile />
        </Route>
        {/* <Route path="*">
          <Error />
        </Route> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
