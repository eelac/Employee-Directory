import React, { Component } from "react";
import "../index.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Click on name to sort by alphabet or use the search box</p>
      </div>
    );
  }
}
