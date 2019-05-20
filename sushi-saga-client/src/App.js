import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushisToRender: [],
    budget: 250

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
    const {sushis, budget} = this.state
    const id = e.target.id;
    // console.log(id);
    // find the sushi we have clicked
    let sushiClicked = sushis.find(sushi => sushi.id == id)
    // change its eaten property to true
    sushiClicked.eaten = true 
    // create a copy of state.sushis
    const sushisCopy = [...sushis]
    // update the state.sushis to include modified sushi
    this.setState({sushis: sushisCopy})
    // update budget
    budget > 0 ? this.setState({budget: budget - sushiClicked.price}) : alert("You don't have enough money!")
    
  }

  render() {
    const {sushisToRender, budget} = this.state
    return (
      <div className="app">
        <SushiContainer 
          sushis={sushisToRender} 
          handleRandomSushis={this.handleRandomSushis}
          handleSushiEaten={this.handleSushiEaten}
        />

        <Table 
          budget={budget}
        />
      </div>
    );
  }
}

export default App;