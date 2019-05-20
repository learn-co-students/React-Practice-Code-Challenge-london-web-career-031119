import React, { Fragment } from 'react'

const Table = (props) => {
  
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }
  // debugger  
  const remainingMoney = props.eatenSushi.map(sushi => sushi.price).reduce((a, b) => a + b, 0)
  const moneyDiff = 250 - remainingMoney
  return ( 
    
    <Fragment>
      <h1 className="remaining">
        You have: {moneyDiff>0 ? '$'+moneyDiff : 'no money'} remaining!
     
      </h1>
      <div className="table">
        <div className="stack">
         { 
           renderPlates(props.eatenSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table