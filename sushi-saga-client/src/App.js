import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushisToRender: [],
    budget: 100, 
    sushisEaten: []

  }

  getSushis = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => this.setState({sushis}, () => this.handleRandomSushis()))
  }

  componentDidMount() {
    this.getSushis()
  }

  handleRandomSushis = () => {
    let sushisToRender = this.state.sushis
      // shuffle array
      .sort(() => Math.random() - 0.5)
      .slice(0, 4) 
    this.setState({sushisToRender})
  }

  handleSushiEaten = (e) => {
    const {sushis, budget, sushisEaten} = this.state
    const id = e.target.id;
    // find the sushi we have clicked
    let sushiSelected = sushis.find(sushi => sushi.id.toString() === id)
    // change its eaten property to true
    sushiSelected.eaten = true 
    // create a copy of state.sushis
    const sushisCopy = [...sushis]
    // update the state.sushis to include modified sushi
    this.setState({sushis: sushisCopy, sushisEaten: [...sushisEaten, sushiSelected]})
    // update budget
    budget - sushiSelected.price < 0 ? alert("You don't have enough money!") : this.setState({budget: budget - sushiSelected.price}) 
    
  }

  render() {
    const {sushisToRender, budget, sushisEaten} = this.state
    return (
      <div className="app">
        <SushiContainer 
          sushis={sushisToRender} 
          handleRandomSushis={this.handleRandomSushis}
          handleSushiEaten={this.handleSushiEaten}
        />

        <Table 
          budget={budget}
          sushisEaten={sushisEaten}
        />
      </div>
    );
  }
}

export default App;