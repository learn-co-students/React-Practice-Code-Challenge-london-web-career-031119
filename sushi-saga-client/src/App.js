import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3001/sushis"

class App extends Component {

  state = {
    sushiList: [],
    eatenSushi: [],
    budget: 100,
  }

  get costOfEatenSushi() {
    let cost = 0
    const { eatenSushi } = this.state
    for (let i = 0; i < eatenSushi.length; i++) {
      cost += eatenSushi[i].price
    }
    return cost
  }

  eatSushi = sushi => {
    const { eatenSushi } = this.state
    this.setState({ eatenSushi: [...eatenSushi, sushi] });
  }

  getSushis() {
    fetch(API).then(r => r.json())
      .then(sushiList => this.setState({ sushiList }))
      .catch(error => alert(error))
  }

  componentDidMount() {
    this.getSushis()
  }

  render() {
    const { sushiList, eatenSushi } = this.state
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} sushis={sushiList} />
        <Table plates={eatenSushi} cost={this.costOfEatenSushi} />
      </div>
    );
  }
}

export default App;