import React, { Component } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import lasagnaImg from "../images/lasagna.jpg";

class Recipe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Italian Lasagna</h1>
        <br />
        <div>
          <Rating />
          <div>320 Ratings</div>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc
          lorem, hendrerit ac leo vitae, pretium sodales elit. Mauris at congue
          nunc, ac sagittis nisl. Sed imperdiet nulla at felis finibus
          ullamcorper.
        </div>
        <img class="list-recipe-image" src={lasagnaImg} />
        <table class="flow-recipe">
          <tr>
            <td>Preheat oven to 375 degrees F</td>
          </tr>
          <tr>
            <td>
              1 pound sweet Italian sausage
              <br />¾ pound lean ground beef
              <br />½ cup minced onion
              <br />2 cloves garlic, crushed
            </td>
            <td class="bottom-curly middle-curly top-curly"></td>
            <td>></td>
            <td>cook on medium until browned</td>
            <td rowspan="2" class="curly"></td>
            <td rowspan="2">></td>

            <td rowspan="2">
              Combine and simmer for 1 1/2 <br />
              hours stirring occasionally to finish the sauce
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              1 (28 ounce) can crushed tomatoes
              <br />2 (6 ounce) cans tomato paste
              <br />2 (6.5 ounce) cans tomato sauce
              <br />½ cup water
              <br />2 tablespoons white sugar
              <br />
              1 ½ teaspoons dried basil leaves
              <br />½ teaspoon fennel seeds
              <br />1 teaspoon Italian seasoning
              <br />1 teaspoon salt
              <br />¼ teaspoon ground black pepper
              <br />2 tablespoons chopped fresh parsley
            </td>
            <td rowspan="4" class="curly"></td>
            <td rowspan="4">></td>
            <td rowspan="4">
              Assemble in a 9x13 inch baking dish in order: Sauce, noodles,
              <br />
              ricotta cheese mixture, mozzerella cheese, sauce, Parmesan.
              <br />
              Repeat.
              <p />
              Cover with foil: to prevent sticking, either spray foil with
              <br />
              cooking spray, or make sure the foil does not touch the cheese.
              <p />
              Bake for 25 minutes.
              <p />
              Remove foil and bake another 25 minutes.
              <p />
              Cool for 15 minutes.
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              Large pot of salted water
              <br />
              12 Lasagna noodles
            </td>
            <td class="bottom-curly middle-curly top-curly"></td>
            <td>></td>
            <td>
              Cook noodles for 8-10 minutes
              <br />
              Drain, rinse with cold water
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              ½ teaspoon salt
              <br />
              16 ounces ricotta cheese
              <br />2 tablespoons parsley
              <br />1 egg
            </td>
            <td class="bottom-curly middle-curly top-curly"></td>
            <td>></td>
            <td>Combine in mixing bowl</td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              ¾ pound mozzarella cheese, sliced
              <br />¾ cup grated Parmesan cheese
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Recipe;
