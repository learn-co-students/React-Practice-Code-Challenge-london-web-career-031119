import React, { Component } from 'react'

class Sushi extends Component {
  state = {
    eaten: false,
  }
  render() {
    const { sushi, eatSushi } = this.props
    return (
      <div className="sushi">
        <div className="plate"
          onClick={() => {
            if (this.state.eaten === false) {
              this.setState({ eaten: true })
              eatSushi(sushi)
            }
          }
          }>
          {this.state.eaten
            ? null
            : <img alt={sushi.name} src={sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {sushi.id}: {sushi.name} - ${sushi.price}
        </h4>
      </div>
    );
  }
}

export default Sushi;