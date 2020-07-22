import React, { Component } from "react";
import HeaderButtons from "./headerButtons/HeaderButtons";
import { Link } from "react-router-dom";

function Header(props) {
  const isLoggedIn = false; // TODO: set this according to user login

  return (
    <div className="header-flex-container">
      <Link to={"/home"}>
        <div className="home-button">
          <h1>Recipe Flow</h1>
        </div>
      </Link>
      <div className="middle-section"></div>
      <HeaderButtons isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default Header;
