import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

function HeaderButtonGuest(props) {
  return (
    <span class="right-section">
      <Route path={notInLogin}>
        <Link to={"/login"}>
          <button class="button-margin">Login</button>
        </Link>
      </Route>
      <Route path={notInRegister}>
        <Link to={"/register"}>
          <button class="button-margin">Register</button>
        </Link>
      </Route>
    </span>
  );
}
const notInLogin = /^(?!.*(\/login)).*$/; // Complicated regex to say: not "/login"
const notInRegister = /^(?!.*(\/register)).*$/; // Complicated regex to say: not "/register"
export default HeaderButtonGuest;
