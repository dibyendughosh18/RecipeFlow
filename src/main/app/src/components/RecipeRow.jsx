import React from "react";

function RecipeRow(props) {
  return (
    <tr>
      <td>{props.data.Id}</td>
      <td>{props.data.Name}</td>
      <td>{props.data.Description}</td>
    </tr>
  );
}

export default RecipeRow;
