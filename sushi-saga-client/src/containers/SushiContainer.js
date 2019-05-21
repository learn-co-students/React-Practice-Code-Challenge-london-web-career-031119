import React, { Fragment } from "react"
import MoreButton from "../components/MoreButton"
import Sushi from "../components/Sushi"

//! import sushi and everything from APP!
// functional component using props sushi from APP and all its available methods that were passed down
const SushiContainer = props => {
  // maps out the 4 sushis and also passes state from App to sushi component. Key is also passed using the id of sushis. 
  let renderFourSushi = () => {
    return props.fourSushi.map(sushi => (
      <Sushi
        sushi={sushi}
        key={sushi.id}
        storeEatenSushi={props.storeEatenSushi}
        budget={props.budget}
      />
    ))
  }

  // Above method in render and also passes the get4sushis from App to more button

  return (
    <Fragment>
      <div className="belt">
        {renderFourSushi()}
        <MoreButton get4Sushi={props.get4Sushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer