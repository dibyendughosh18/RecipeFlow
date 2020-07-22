import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextArea from "./TextArea";

class StepCard extends Component {
  constructor(props) {
    super(props);

    this.textbox = React.createRef();
  }

  handleChange(event) {
    var ingIndex = parseInt(event.target.name);
    this.props.useIngredient(event.target.checked, ingIndex);
  }

  render() {
    return (
      <table className="max-width">
        <tbody>
          <tr>
            <td className="half-width">
              {this.props.ingredients.map((value) => {
                var id = "checkbox-" + value.index;
                return (
                  <div className="ingredient" key={id}>
                    <input
                      type="checkbox"
                      value={value.value}
                      id={id}
                      name={value.index}
                      onChange={this.handleChange.bind(this)}
                    />
                    <label htmlFor={id}>{value.value}</label>
                  </div>
                );
              })}
            </td>
            <td className="curly" />
            <td>{">"}</td>
            <td>
              <textarea
                ref={this.textbox}
                className="max-width"
                //maxLength="255"
                placeholder="Enter what to do with the selected ingredients"
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default StepCard;
