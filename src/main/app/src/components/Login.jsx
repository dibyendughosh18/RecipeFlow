import React, { Component } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div class="vertical-flow">
      <h1>Login</h1>
      <table>
        <tr>
          <td>
            <label>E-mail address</label>
          </td>
          <td>
            <input type="text"></input>
          </td>
        </tr>
        <tr>
          <td>
            <label>Password</label>
          </td>
          <td>
            <input type="password"></input>
          </td>
        </tr>
      </table>
      <Link to={"/home"}>
        <button>Login</button>
      </Link>
      <hr />
      <div>
        <span>Not a member? </span>
        <Link to={"/register"}>Register</Link>
      </div>
    </div>
  );
}

export default Login;
