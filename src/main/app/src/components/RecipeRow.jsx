import React from "react";
import logo from "../images/star.jpg";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function RecipeRow(props) {
  return (
    <div class="list-recipe">
      <Link to="/recipe" class="list-recipe-clickable">
        <img class="list-recipe-image" src={props.data.ImgUrl} />
        <div class="list-recipe-text">
          <div class="list-recipe-name">{props.data.Name}</div>
          <div class="list-recipe-description">{props.data.Description}</div>
        </div>
      </Link>
      <Rating />
    </div>
  );
}

export default RecipeRow;
