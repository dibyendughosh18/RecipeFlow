import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

function HeaderButtonGuest(props) {
  return (
    <span className="right-section">
      <Route path={notInLogin}>
        <Link to={"/login"}>
          <button className="button-margin">Login</button>
        </Link>
      </Route>
      <Route className={notInRegister}>
        <Link to={"/register"}>
          <button className="button-margin">Register</button>
        </Link>
      </Route>
    </span>
  );
}
const notInLogin = /^(?!.*(\/login)).*$/; // Complicated regex to say: not "/login"
const notInRegister = /^(?!.*(\/register)).*$/; // Complicated regex to say: not "/register"
export default HeaderButtonGuest;
