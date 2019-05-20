import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const amount = event.target[0].value
    if (amount) {
      props.addBudget(parseInt(amount, 10))
      event.target.reset()
    }
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.budget } remaining! 
        <form style={{display: "inline"}} id="budget-increment" onSubmit={handleSubmit}>
          <input type="number" id="more-budget" name="more-budget" />
          <button type="submit">Add more!</button>
        </form>
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.plates)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table