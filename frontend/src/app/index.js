"use client";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Home from "./Home";
// import volunteer info page
// import form to input volunteer info page

function Web() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default Web;