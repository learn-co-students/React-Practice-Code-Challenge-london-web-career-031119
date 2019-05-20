import React, { Fragment, Component } from "react";

class Sushi extends Component {
  state = {
    display: true
  };

  handleClick = () => {
    this.setState({ display: false });
    this.props.eatSushi(this.props.sushi);
  };

  render() {
    return (
      <div className="sushi">
        <div className="plate">
          {/* Tell me if this sushi has been eaten! */

          this.state.display ? (
            <img
              onClick={this.handleClick}
              src={this.props.sushi.img_url}
              width="100%"
            />
          ) : null}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    );
  }
}

export default Sushi;
