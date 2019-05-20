import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    firstPosition: 0,
    lastPosition: 4,
    budget: 100,
    sushiPlates: []
  };

  fetchSushi = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({ sushi: data }));
  };

  componentDidMount = () => {
    this.fetchSushi();
  };

  sushiDisplay = () => {
    return this.state.sushi.slice(
      this.state.firstPosition,
      this.state.lastPosition
    );
  };

  moreSushi = () => {
    let newState = Object.assign({}, this.state);
    newState.firstPosition += 4;
    newState.lastPosition += 4;
    this.setState(newState);
  };

  eatSushi = sushi => {
    let budget;
    if (this.state.budget - sushi.price > 0) {
      budget = this.state.budget - sushi.price;
      this.setState({
        ...this.state,
        budget: budget,
        sushiPlates: [...this.state.sushiPlates, sushi]
      });
    } else {
      alert("Cannot purchase more sushi than budget amount.");
    }
  };

  render() {
    return (
      <div className="app">
        {this.state.sushi && (
          <SushiContainer
            moreSushi={this.moreSushi}
            sushi={this.sushiDisplay()}
            eatSushi={this.eatSushi}
          />
        )}
        <Table
          budget={this.state.budget}
          sushiPlates={this.state.sushiPlates}
        />
      </div>
    );
  }
}

export default App;
