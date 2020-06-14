import React, { Component } from "react";
import RecipeRow from "./RecipeRow";

function RecipeTable(props) {
  const testData = [
    {
      Id: 50,
      Name: "Cheese Sandwich",
      Description: "The best sandwich ever",
    },
    {
      Id: 51,
      Name: "Lasagna",
      Description: "The best lasagna ever",
    },
    {
      Id: 52,
      Name: "Cookies",
      Description: "The best cookies ever",
    },
  ];

  return (
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
      {testData.map((value) => {
        return <RecipeRow data={value} />;
      })}
    </table>
  );
}

export default RecipeTable;
