import React, { useState } from 'react';

function Wallet(props) {
  const [cash, setCash] = useState(0)

  const handleChange = event => setCash(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    props.handleWalletSubmit(cash);
  }

  return (
    <form className="wallet" onSubmit={handleSubmit}>
      <input type="number" name="cash" id="cash" value={cash} onChange={handleChange} />
      <input type="submit" value="Add to Money" />
    </form>
  );
};

export default Wallet;