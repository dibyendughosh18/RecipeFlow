import React, { Component } from "react";
import { Link } from "react-router-dom";
import Step from "../create/Step";
import Wizard from "./Wizard";

class RecipeWizard extends Component {
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
        <div className="vertical-center-contents">
          <h1>Create Recipe</h1>
        </div>
        <Wizard />

        {/*
        <Step
          content={this.testData.content}
          children={this.testData.children}
          cIndex={0}
        />
        */}
        <div className="placeholder-box">
          <h2>Placeholder for recipe display</h2>
        </div>
        <button>Submit</button>
      </div>
    );
  }
}

export default RecipeWizard;
