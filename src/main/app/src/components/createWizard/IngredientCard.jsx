import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextArea from "./TextArea";

class IngredientCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      addText: "",
    };

    this.inputRef = React.createRef();

    this.myTextChanged = this.textChanged.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  textChanged(event) {
    event.preventDefault();
    this.setState({
      addText: event.target.value,
    });
  }

  addIngredient() {
    const { ingredients, addText } = this.state;
    if (addText === "") {
      return;
    }
    ingredients.push(addText);
    this.setState({
      ingredients,
      addText: "",
    });
    this.props.ingredientsCallback(ingredients);
    this.inputRef.current.focus();
  }

  handleKey(event) {
    if (event.key === "Enter") {
      this.addIngredient();
    }
  }

  getIngredients() {
    return this.state.ingredients;
  }

  render() {
    return (
      <div className="card-contents">
        <ul className="list-contents">
          {this.state.ingredients.map((value, index) => {
            return <li key={value + index}>{value}</li>;
          })}
          <li>
            <input
              type="text"
              placeholder="Add Ingredient..."
              value={this.state.addText}
              onChange={this.myTextChanged}
              onKeyPress={this.handleKey}
              ref={this.inputRef}
            />
            <button onClick={this.addIngredient}>+</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default IngredientCard;
