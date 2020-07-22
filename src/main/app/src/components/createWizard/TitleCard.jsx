import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextArea from "./TextArea";

class TitleCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="max-width">
        <tbody>
          <tr>
            <td>
              <label>Title</label>
            </td>
            <td>
              <input className="max-width" type="text"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>Description</label>
            </td>
            <td>
              <textarea
                className="description-box"
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
              <span className="max-width">
                <input type="text"></input>
                <button>Browse</button>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <label>Tags</label>
            </td>
            <td>
              <input
                className="max-width"
                type="text"
                placeholder="E.g. vegan japanese comfort-food"
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TitleCard;
