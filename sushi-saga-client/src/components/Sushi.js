import React, { Fragment } from "react";

const Sushi = props => {
  return (
    <div className="sushi">
      <div
        className="plate"
        onClick={e => props.eatSushi(e, props.sushi.price)}
      >
        {true ? <img src={props.sushi.img_url} width="100%" /> : null}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  );
};

export default Sushi;
