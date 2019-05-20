import React, { Fragment } from "react";

const Table = props => {
  const renderPlates = array => {
    return array.map((x, index) => {
      return (
        <div className="empty-plate" style={{ top: -7 * index }} key={index} />
      );
    });
  };

  return (
    <Fragment>
      <div className="remaining">
        <h1>You have: ${props.credits} remaining!</h1>
        <form className="remaining" onSubmit={e => props.onTopup(e)}>
          $
          <input type="integer" placeholder="Enter amount here" name="amount" />
          <input type="submit" value="Top Up Your Sushi Wallet" />
        </form>
      </div>
      <div className="table">
        <div className="stack">{renderPlates(props.eatenSushis)}</div>
      </div>
    </Fragment>
  );
};

export default Table;
