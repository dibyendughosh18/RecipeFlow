import React, { Component } from "react";
import { Link } from "react-router-dom";

class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
      children: props.children,
    };

    this.myAddStep = this.addStep.bind(this);
  }

  addStep() {
    let newChildren = this.state.children;
    newChildren.splice(this.props.cIndex + 1, 0, {
      content: "",
      children: [],
    });
    this.setState({
      children: newChildren,
    });
  }

  render() {
    return (
      <table class="step-table">
        <tbody>
          <tr>
            {this.state.children.length > 0 && (
              <td>
                <div class="vertical-right-contents">
                  {this.state.children.map((item, cIndex) => (
                    <Step
                      key={cIndex}
                      content={item.content}
                      children={item.children}
                      addFunction={this.myAddStep}
                      cIndex={cIndex}
                    />
                  ))}
                </div>
              </td>
            )}
            {this.state.children.length > 0 && <td class="curly"></td>}
            {this.state.children.length > 0 && <td>&gt;</td>}
            <td>
              <textarea
                placeholder="Enter instructions"
                defaultValue={this.state.content}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <div class="plus-button2" onClick={this.props.addFunction}>
                +
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Step;
