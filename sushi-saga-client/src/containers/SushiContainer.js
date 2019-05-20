import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
         {props.renderSushi.map(sushi =>
           < Sushi key={sushi.id} 
                   sushi={sushi} 
                   handleClick = {props.handleClick}
                   eatenSushi={props.eatenSushi}
                   />
         )}
        <MoreButton getFourSushi={props.getFourSushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer