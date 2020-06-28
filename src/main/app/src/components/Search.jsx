import React, { Component } from "react";
import RecipeRow from "./RecipeRow";
import SearchBox from "./SearchBox";
import cheeseImg from "../images/cheese-sandwich.jpg";
import lasagnaImg from "../images/lasagna.jpg";
import cookiesImg from "../images/cookies.jpg";

function Search(props) {
  const testData = [
    {
      Id: 50,
      ImgUrl: cheeseImg,
      Name: "Cheese Sandwich",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc lorem, hendrerit ac leo vitae, pretium sodales elit. Mauris at congue nunc, ac sagittis nisl. Sed imperdiet nulla at felis finibus ullamcorper.",
    },
    {
      Id: 51,
      ImgUrl: lasagnaImg,
      Name: "Italian Lasagna",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc lorem, hendrerit ac leo vitae, pretium sodales elit. Mauris at congue nunc, ac sagittis nisl. Sed imperdiet nulla at felis finibus ullamcorper.",
    },
    {
      Id: 52,
      ImgUrl: cookiesImg,
      Name: "Cookies",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc lorem, hendrerit ac leo vitae, pretium sodales elit. Mauris at congue nunc, ac sagittis nisl. Sed imperdiet nulla at felis finibus ullamcorper.",
    },
  ];

  return (
    <div>
      <div class="search-bar">
        <div>Find Recipes</div>
        <SearchBox history={props.history} location={props.location} />
        <div class="middle-section"></div>
        <div>Sort by:</div>
        <select name="sort" id="sort">
          <option value="relevance">Relevance</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div class="vertical-flow recipe-list">
        {testData.map((value) => {
          return (
            <div>
              <RecipeRow data={value} />
              <hr />
            </div>
          );
        })}
      </div>
      <div class="page-buttons">
        <span>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">7</a>
          <a href="#">></a>
        </span>
      </div>
    </div>
  );
}

export default Search;
