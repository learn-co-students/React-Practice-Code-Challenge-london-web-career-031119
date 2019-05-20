import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3007/sushis"

class App extends Component {

  state = {
    sushis: [],
    budget: 250,
    emptyPlates: []
  }

  getSushis = () => {
    return fetch(API)
      .then(resp => resp.json())
  }

  componentDidMount() {
    this.getSushis()
      .then(sushis => this.setState({ sushis }))
  }

  nextBatch = () => {
    this.setState({
      sushis: this.state.sushis.slice(4)
    })
  }

  handlePayment = (sushiId) => {
    const { sushis, budget } = this.state
    const sushi = sushis.find(sushi => sushi.id === sushiId)
    const payment = sushi.price
    this.setState({ budget: budget - payment })
  }

  incrementPlates = () => {
    const emptyPlates = new Array(this.state.emptyPlates.length + 1)
    emptyPlates.fill("plate")
    this.setState({ emptyPlates })
  }

  addBudget = (amount) => {
    this.setState({ budget: this.state.budget + amount })
  }

  render() {
    const { sushis, budget, emptyPlates } = this.state

    return (
      <div className="app">
        <SushiContainer
          sushiList={sushis.slice(0, 4)}
          nextBatch={this.nextBatch}
          handlePayment={this.handlePayment}
          incrementPlates={this.incrementPlates}
          budget={budget}
        />
        <Table
          budget={budget}
          plates={emptyPlates}
          addBudget={this.addBudget}
        />
      </div>
    );
  }
}

export default App;