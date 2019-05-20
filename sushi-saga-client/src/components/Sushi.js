import React from 'react'


const Sushi = (props) =>  {

    return (
      <div className="sushi" onClick={props.handleSushiEaten}>
        <div className="plate">
          { 
            // /* Tell me if this sushi has been eaten! */ 
            props.sushi.eaten ?
              null
            :
              <img id={props.sushi.id} src={props.sushi.img_url} width="100%"  alt={props.sushi.name}/>
          }
        </div>
        <h4 className="sushi-details">
          {props.sushi.name} - ${props.sushi.price}
        </h4>
      </div>
    )
  }
  

export default Sushi