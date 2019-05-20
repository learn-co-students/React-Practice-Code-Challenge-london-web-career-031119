import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Wallet from './components/Wallet';

// Endpoint!
const API = "http://localhost:3000/sushis";
let conveyorInterval;
const beltSpace = 4;

class App extends Component {

  state = {
    sushis: [],
    conveyorPosition: 1,
    money: 100,
    sushiEaten: [],
    conveyorLive: true,
  }

  currentSushis = () => {
    const { sushis, conveyorPosition } = this.state;
    if (conveyorPosition > sushis.length - beltSpace) {
      return [...sushis.slice(conveyorPosition, conveyorPosition + beltSpace),
        ...sushis.slice(0, beltSpace -(sushis.length - conveyorPosition))]
    }
    return sushis.slice(conveyorPosition, conveyorPosition + beltSpace);
  }

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
    this.state.conveyorPosition + beltSpace > this.state.sushis.length
      ? this.setState( { conveyorPosition: 1 } )
      : this.setState( { conveyorPosition: this.state.conveyorPosition + beltSpace } )
  }

  handleWalletSubmit = cash => {
    const money = this.state.money + parseInt(cash, 10)
    this.setState( { money } )
  }
  
  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState( { sushis: data } ));
    
    this.handleCoveyerInterval();
  }
  
  handleCoveyerInterval = () => conveyorInterval = setInterval(this.handleConveyor, 1.5 * 1000);

  handleConveyor = () => {
    const conveyorPosition = this.state.conveyorPosition < this.state.sushis.length
      ? this.state.conveyorPosition + 1 
      : 1
    this.setState( { conveyorPosition })
  }
  
  handleClickStopBeltBtn = () => {
    if (this.state.conveyorLive) {
      clearInterval(conveyorInterval)
      this.setState( { conveyorLive: false } )
    } else {
      this.handleCoveyerInterval();
      this.setState( { conveyorLive: true } )
    }
  }

  render() {
    const { money, sushiEaten, conveyorLive } = this.state;
    const { currentSushis, handleEatSushi, handleClickMoreBtn, handleWalletSubmit, handleClickStopBeltBtn } = this;
    return (
      <div className="app">
        <SushiContainer 
          sushis={currentSushis()}
          conveyorLive={conveyorLive}
          handleEatSushi={handleEatSushi}
          handleClickMoreBtn={handleClickMoreBtn}
          handleClickStopBeltBtn={handleClickStopBeltBtn}
        />
        <Table sushiEaten={sushiEaten} money={money} />
        <Wallet handleWalletSubmit={handleWalletSubmit} />
      </div>
    );
  }
}

export default App;