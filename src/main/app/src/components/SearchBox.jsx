import React, { Component } from "react";
import SearchField from "react-search-field";

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SearchField
        placeholder="Search"
        onEnter={this.search.bind(this)}
        onSearchClick={this.search.bind(this)}
        searchText={this.queryValue()}
      />
    );
  }

  queryValue() {
    return this.replaceAll(this.getQueryVariable("q"), "+", " ");
  }

  getQueryVariable(variable) {
    if (!this.props.location || !this.props.location.search) {
      return "";
    }
    var query = this.props.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (decodeURIComponent(pair[0]) == variable) {
        return decodeURIComponent(pair[1]);
      }
    }
  }
  search(value, event = null) {
    if (value !== "") {
      this.props.history.push(
        "/search?q=" + this.replaceAll(value.trim(), " ", "+")
      );
    }
  }

  replaceAll(string, search, replace) {
    return string.split(search).join(replace);
  }
}

export default SearchBox;
