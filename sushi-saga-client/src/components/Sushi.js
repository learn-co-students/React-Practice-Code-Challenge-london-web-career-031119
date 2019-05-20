import React, { Component } from 'react'


class Sushi extends Component  {

  render() {
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={this.props.handleSushiEaten}>
          { 
            // /* Tell me if this sushi has been eaten! */ 
            this.props.sushi.eaten ?
              null
            :
              <img id={this.props.sushi.id} src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
  
}

export default Sushi