import React, { Component } from "react";
import classnames from "classnames";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  render() {
    return (
      <nav
        className={classnames("navbar", {
          "navbar--hidden": !this.state.visible
        })}
      >
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
      </nav>
    );
  }
}