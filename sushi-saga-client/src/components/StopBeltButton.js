import React from 'react'

const StopBeltButton = (props) => {
  return (
    <button onClick={props.handleClickStopBeltBtn}>
      {props.conveyorLive ? "Stop Belt" : "Start Belt"}
    </button>
  )
}

export default StopBeltButton