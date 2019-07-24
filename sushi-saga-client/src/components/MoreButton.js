import React from "react"
// triggers the get4sushi method - Container imported in sushi container
const MoreButton = props => {
  return <button onClick={() => props.get4Sushi()}>More sushi!</button>
}

export default MoreButton