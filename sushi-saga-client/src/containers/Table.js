import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  const { money, sushiEaten } = props

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ money } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(sushiEaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table