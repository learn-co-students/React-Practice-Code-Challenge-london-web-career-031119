import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.displayedSushis.map(sushi => (
          <Sushi
            key={sushi.id}
            sushi={sushi}
            eatSushi={sushi => props.eatSushi(sushi)}
            eatenSushis={props.eatenSushis}
          />
        ))}
        <MoreButton onDisplayedSushis={props.onDisplayedSushis} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
