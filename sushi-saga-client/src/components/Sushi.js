import React from 'react'

const Sushi = (props) => {
  const { sushi, handleEatSushi  } = props
  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleEatSushi(sushi)}>
        { sushi.eaten ? null : <img src={sushi.img_url} width="100%" alt="sushi" /> }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi