import React, { Component } from "react";
import { Link } from "react-router-dom";
import Step from "./create/Step";

class CreateRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      root: null,
    };

    this.testData = {
      content: "Test final instruction",
      children: [
        {
          content: "do something",
          children: [
            {
              content: "ing 1\ning 2",
              children: [],
            },
          ],
        },
        {
          content: "do something else",
          children: [
            {
              content: "ing 3\ning 4",
              children: [],
            },
          ],
        },
        {
          content: "ing 5\ning 6",
          children: [],
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div class="vertical-center-contents">
          <h1>Create Recipe</h1>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Title</label>
              </td>
              <td>
                <input type="text"></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Description</label>
              </td>
              <td>
                <textarea
                  class="description-box"
                  maxLength="255"
                  placeholder="255 characters max"
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <label>Picture</label>
              </td>
              <td>
                <span>
                  <input type="text"></input>
                  <button>Browse</button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <Step
          content={this.testData.content}
          children={this.testData.children}
          cIndex={0}
        />

        <button>Submit</button>
      </div>
    );
  }
}

export default CreateRecipe;
