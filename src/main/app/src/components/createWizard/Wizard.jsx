import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitleCard from "./TitleCard";
import IngredientCard from "./IngredientCard";
import StepCard from "./StepCard";
import DoneCard from "./DoneCard";

class Wizard extends Component {
  constructor(props) {
    super(props);

    this.nextButton = this.nextButton.bind(this);
    this.setIngredients = this.setIngredients.bind(this);
    this.useIngredient = this.useIngredient.bind(this);

    this.titleCard = <TitleCard />;

    this.ingredientCard = (
      <IngredientCard ingredientsCallback={this.setIngredients} />
    );

    this.state = {
      page: 0,
      pages: [this.titleCard, this.ingredientCard],
      ingredients: [],
      steps: [],
      usedIngredients: [],
      usedSteps: [],
    };
  }

  updateStep(index, content, children) {
    const { steps, usedSteps } = this.state;
    steps[index] = {
      content,
      children,
    };
    //usedSteps.
    this.setState({
      steps,
    });
  }

  currentPage() {
    return this.getPage(this.state.page);
  }

  getPage(index) {
    return this.state.pages[index];
  }

  use(checked, item, allList, usedList) {
    if (checked == true) {
      usedList.push(item);
      console.log("Checked: " + allList[item]);
    } else {
      usedList.splice(usedList.indexOf(item));
      console.log("Unchecked: " + allList[item]);
    }
    return usedList;
  }

  useStep(checked, step) {
    var usedSteps = this.use(
      checked,
      step,
      this.state.steps,
      this.state.usedSteps
    );
    this.setState({
      usedSteps,
    });
    console.log(usedSteps);
  }

  useIngredient(checked, ingredient) {
    var usedIngredients = this.use(
      checked,
      ingredient,
      this.state.ingredients,
      this.state.usedIngredients
    );
    this.setState({
      usedIngredients,
    });
    console.log(usedIngredients);
  }

  setIngredients(ingredients) {
    this.setState({
      ingredients,
    });
  }

  usedAll() {
    const { ingredients, usedIngredients, steps, usedSteps } = this.state;
    var ingredsUsed = ingredients.length === usedIngredients.length;
    var stepsUsed = steps.length === usedSteps.length;
    return ingredsUsed && stepsUsed;
  }

  remainingIngredients() {
    const { ingredients, usedIngredients } = this.state;

    var remainingIngreds = [];
    for (var i = 0; i < ingredients.length; i++) {
      if (usedIngredients.includes(i)) {
        continue;
      }
      remainingIngreds.push({
        index: i,
        value: ingredients[i],
      });
    }
    return remainingIngreds;
  }

  nextButton() {
    const newPage = this.state.page + 1;

    const { steps } = this.state;

    const currPage = this.currentPage();

    var done = this.usedAll();

    if (currPage.type === StepCard && !steps.includes(this.state.page)) {
      steps.push(this.state.page);
      this.setState({
        steps,
      });
    }
    if (!this.getPage(newPage)) {
      const { pages } = this.state;
      if (!done) {
        const { ingredients, steps } = this.state;

        var remIng = this.remainingIngredients();
        console.log(remIng);

        pages.push(
          <StepCard
            key={newPage}
            ingredients={remIng}
            useIngredient={this.useIngredient}
            steps={remIng}
            useStep={this.useStep}
          />
        );
      } else {
        pages.push(<DoneCard key={newPage} />);
      }

      this.setState({
        pages,
      });
    }

    this.setState({
      page: newPage,
    });
  }

  render() {
    return (
      <div className="wizard">
        <table className="max-height max-width">
          <tbody>
            <tr>
              <td valign="top">{this.currentPage()}</td>
            </tr>
            <tr>
              <td valign="bottom" className="wizard-button-container">
                <button className="button-margin" onClick={this.nextButton}>
                  Next
                </button>
                <button>Done</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Wizard;
