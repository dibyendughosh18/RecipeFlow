import React from "react";
import logo from "../images/star.jpg";
import { Link } from "react-router-dom";

function Rating(props) {
  return (
    <div class="list-recipe-rating">
      <img src={logo} class="tmp-rating-img" />
      <img src={logo} class="tmp-rating-img" />
      <img src={logo} class="tmp-rating-img" />
      <img src={logo} class="tmp-rating-img" />
      <img src={logo} class="tmp-rating-img" />
    </div>
  );
}

export default Rating;
