import React, { Component } from "react"

class Sushi extends Component {
  state = {
    eaten: false
  }
  // When the plate is clicked, uses the sushi prop (passed down from SushiContainer) 
  // to check if your in budget & have not eaten it before to store the sushi within eaten sushi state
  // by triggering eaten sushi function in app and passing the selected sushi object which gets added using ...
  eatSushi = sushi => {
    if (sushi.price <= this.props.budget && !this.state.eaten) {
      this.setState({ eaten: true })
      this.props.storeEatenSushi(sushi)
    }
  }
  // If the eaten is false dont show picture else show image url
  displayImage = () => {
    return this.state.eaten ? null : (
      <img src={this.props.sushi.img_url} width="100%" alt=""/>
    )
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" onClick={() => this.eatSushi(this.props.sushi)}>
          {/* triggers the eatsushi by using arrow function */}
          {this.displayImage()}
        </div>
          {/* shows the sushi name and price on the top */}
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi