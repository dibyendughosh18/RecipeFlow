import React, { Component } from "react";
import { Link } from "react-router-dom";

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
    };
    this.myTextChanged = this.textChanged.bind(this);
  }

  textChanged(event) {
    event.preventDefault();
    this.setState({
      content: event.target.value,
    });
  }

  render() {
    return (
      <textarea
        placeholder="Enter instructions"
        value={this.state.content}
        onChange={this.myTextChanged}
      />
    );
  }
}

export default TextArea;
