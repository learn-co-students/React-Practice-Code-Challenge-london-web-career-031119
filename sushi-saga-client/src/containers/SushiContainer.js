import React, { Fragment } from 'react'
// import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';
import StopBeltButton from '../components/StopBeltButton';

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi =>
          <Sushi sushi={sushi} handleEatSushi={props.handleEatSushi} key={sushi.id} />  
        )}
        {/* <MoreButton handleClickMoreBtn={props.handleClickMoreBtn} /> */}
        <StopBeltButton conveyorLive={props.conveyorLive} handleClickStopBeltBtn={props.handleClickStopBeltBtn} />
      </div>
    </Fragment>
  )
}

export default SushiContainer