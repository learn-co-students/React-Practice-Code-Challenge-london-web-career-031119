import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3001/sushis";

class App extends Component {
  state = {
    sushis: [],
    fourSushis: [],
    money: 100
  };

  getSushis = () =>
    fetch(API)
      .then(resp => resp.json())
      .then(sushis =>
        this.setState({ sushis }, () => {
          this.handleRandomSushis();
        })
      );

  handleRandomSushis = () => {
    let fourSushis = this.state.sushis
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    this.setState({ fourSushis });
  };

  handleEaten = (event, price) => {
    let total = this.state.money - price;
    if (event.target.src) {
      if (total >= 0 && total < 100) {
        event.target.remove();
        this.setState({ money: total });
      }
    }
  };

  componentDidMount() {
    this.getSushis();
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.fourSushis}
          handleRandomSushis={this.handleRandomSushis}
          handleEaten={this.handleEaten}
        />
        <Table handleEaten={this.handleEaten} money={this.state.money} />
      </div>
    );
  }
}

export default App;
