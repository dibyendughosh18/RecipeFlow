import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextArea from "./TextArea";

class DoneCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="max-width max-height vertical-center-contents">
        <h2>Done</h2>
        <div>Review the recipe and press "Done" when complete.</div>
      </div>
    );
  }
}

export default DoneCard;
