import React, { Component } from "react";
import HeaderButtonGuest from "./HeaderButtonsGuest";
import HeaderButtonMember from "./HeaderButtonsMember";

class HeaderButtons extends React.Component {
  constructor(props) {
    super(props);

    this.loginHandler = this.login.bind(this);
    this.logoutHandler = this.logout.bind(this);

    this.state = { isLoggedIn: props.isLoggedIn };
  }

  login() {
    this.setState({
      isLoggedIn: true,
    });
  }

  logout() {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    if (this.state.isLoggedIn) {
      return <HeaderButtonMember loginHandler={this.loginHandler} />;
    } else {
      return <HeaderButtonGuest logoutHandler={this.logoutHandler} />;
    }
  }
}

export default HeaderButtons;
