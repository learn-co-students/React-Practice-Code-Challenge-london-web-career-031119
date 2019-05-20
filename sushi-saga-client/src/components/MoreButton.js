import React from 'react'

const MoreButton = ({ viewSushis }) => {
  return <button onClick={() => viewSushis(true)}>Right</button>
}

export default MoreButton