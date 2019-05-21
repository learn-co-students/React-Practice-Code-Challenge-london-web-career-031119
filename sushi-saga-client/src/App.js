import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
// set all the states here
  state = {
    allSushi: [],
    renderedSushi: [],
    eatenSushi: [],
    budget: 100
  }

  componentDidMount() {
    this.getSushi()
      .then(sushi => this.setState({ allSushi: sushi }))
      .then(() => this.get4Sushi())
  }
  // Grab sushi and mount it above + add it to state and then grab the 4 sushis, using () => function
  getSushi = () => {
    return fetch(API).then(resp => resp.json())
  }
  // Use the getSushi > allSushi to slice to only 4 and put it inside rendered sushi
  get4Sushi = () => {
    this.setState({
      renderedSushi: this.state.allSushi.slice(0, 4),
      allSushi: this.state.allSushi.slice(4)
    })
  }
  // puts sushi in eatensushi state then takes away budget from the sushi price 
  storeEatenSushi = sushi => {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi],
      budget: this.state.budget - sushi.price
    })
  }
  // Pass all the state across sushi container and also to table
  render() {
    return (
      <div className="app">
        <SushiContainer
          get4Sushi={this.get4Sushi}
          fourSushi={this.state.renderedSushi}
          storeEatenSushi={this.storeEatenSushi}
          budget={this.state.budget}
        />
        <Table eatenSushi={this.state.eatenSushi} budget={this.state.budget} />
      </div>
    );
  }
}

export default App