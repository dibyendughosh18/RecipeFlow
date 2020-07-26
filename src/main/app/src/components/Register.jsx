import React, { Component } from "react";
import { Link } from "react-router-dom";

function Register(props) {
  return (
    <div class="vertical-flow">
      <h1>Register</h1>
      <table>
        <tr>
          <td>E-mail address</td>
          <td>
            <input type="text"></input>
          </td>
        </tr>
        <tr>
          <td>Password</td>
          <td>
            <input type="password"></input>
          </td>
        </tr>
        <tr>
          <td>Confirm Password</td>
          <td>
            <input type="password"></input>
          </td>
        </tr>
      </table>
      <Link to={"/login"}>
        <button>Register</button>
      </Link>
    </div>
  );
}

export default Register;
