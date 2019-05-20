import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(item => (
          <Sushi eatSushi={props.eatSushi} key={item.id} sushi={item} />
        ))}
        <MoreButton handleClick={props.handleClick} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
