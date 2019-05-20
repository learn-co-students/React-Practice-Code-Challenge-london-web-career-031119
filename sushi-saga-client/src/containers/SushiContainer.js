import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = props => {

  const { handlePayment, incrementPlates, budget, nextBatch } = props

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiList.map(sushi =>
            <Sushi
              key={sushi.id}
              sushi={sushi}
              handlePayment={handlePayment}
              incrementPlates={incrementPlates}
              budget={budget}
            />
          )
        }
        <MoreButton handleClick={nextBatch} />
      </div>
    </Fragment>
  )
}

export default SushiContainer