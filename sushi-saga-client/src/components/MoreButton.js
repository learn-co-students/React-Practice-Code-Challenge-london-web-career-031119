import React, { Component } from "react";

class MoreButton extends Component {
  handleClick = () => {
    this.props.moreSushi();
  };

  state = {};
  render() {
    return <button onClick={this.handleClick}>More sushi!</button>;
  }
}

export default MoreButton;
