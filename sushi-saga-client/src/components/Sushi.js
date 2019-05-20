import React, { Fragment } from 'react'

class Sushi extends React.Component {

  state = {
    eaten: false
  }

  handleClick = () => {
    const { budget } = this.props
    const { price, id } = this.props.sushi


    if (!this.state.eaten && budget >= price) {
      this.setState({ eaten: true })
      this.props.handlePayment(id)
      this.props.incrementPlates()
    }
  }
  
  render() {

    const { id, price, img_url, name } = this.props.sushi

    
    return(
      <div className = "sushi" >
        <div className="plate"
          onClick={this.handleClick}>
          { 
            this.state.eaten
              ? null
              : <img src={img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {name} ${price}
        </h4>
      </div>
    )
  }
}

export default Sushi