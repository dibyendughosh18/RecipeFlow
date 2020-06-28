import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

function Home(props) {
  return (
    <div class="vertical-flow">
      <h1>Recipe Flow</h1>
      <div>Cooking made easy</div>
      <hr />
      <div>
        <label>Find Recipes</label>
        <SearchBox history={props.history} />
      </div>
    </div>
  );
}

export default Home;
