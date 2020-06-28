import React, { Component } from "react";
import Router, { Link } from "react-router-dom";

function HeaderButtonMember(props) {
  return (
    <div class="right-section">
      <Link to={"/createRecipe"}>
        <button>Create Recipe</button>
      </Link>
      <button onClick={props.logoutHandler}>Logout</button>
    </div>
  );
}

export default HeaderButtonMember;
