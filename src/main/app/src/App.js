import React from "react";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Search from "./components/Search";
import Recipe from "./components/Recipe";
import CreateRecipe from "./components/CreateRecipe";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/app">
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/search" component={Search} />
        <Route path="/recipe" component={Recipe} />
        <Route path="/createRecipe" component={CreateRecipe} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
