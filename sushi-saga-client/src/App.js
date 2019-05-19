import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Wallet from './components/Wallet';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    conveyorPosition: 1,
    money: 100,
    sushiEaten: [],
  }

  currentSushis = () => 
    this.state.sushis.filter(sushi => 
      sushi.id >= this.state.conveyorPosition
      &&
      sushi.id < this.state.conveyorPosition + 4
    );

  handleEatSushi = sushi => {
    if (sushi.eaten) {return}
    const {price, id} = sushi
    const sushis = this.state.sushis.map(sushi => sushi.id === id ? {...sushi, eaten: true} : sushi);
    const sushiEaten = [...this.state.sushiEaten, sushi];
    const money = this.state.money - price;
    if(this.state.money >= price) {
      this.setState( { 
        sushis,
        money,
        sushiEaten, 
      } )
    }
  }

  handleClickMoreBtn = () => {
    this.state.conveyorPosition + 4 > this.state.sushis.length
      ? this.setState( { conveyorPosition: 1 } )
      : this.setState( { conveyorPosition: this.state.conveyorPosition + 4 } )
  }

  handleWalletSubmit = cash => {
    const money = this.state.money + parseInt(cash, 10)
    this.setState( { money } )
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState( { sushis: data } ))
  }

  render() {
    const { money, sushiEaten } = this.state;
    const { currentSushis, handleEatSushi, handleClickMoreBtn, handleWalletSubmit } = this;
    return (
      <div className="app">
        <SushiContainer 
          sushis={currentSushis()}
          handleEatSushi={handleEatSushi}
          handleClickMoreBtn={handleClickMoreBtn}
        />
        <Table sushiEaten={sushiEaten} money={money} />
        <Wallet handleWalletSubmit={handleWalletSubmit} />
      </div>
    );
  }
}

export default App;