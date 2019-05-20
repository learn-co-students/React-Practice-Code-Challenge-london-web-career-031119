import React from 'react'

const LessButton = ({ viewSushis }) => {
  return <button onClick={() => viewSushis(false)}>
    Left
  </button>
}

export default LessButton