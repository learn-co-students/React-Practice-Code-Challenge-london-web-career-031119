import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    allSushis: [],
    availableSushis: [],
    displayedSushis: [],
    eatenSushis: [],
    credits: 85
  };

  componentDidMount() {
    return fetch(API)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          allSushis: data,
          availableSushis: data,
          displayedSushis: data.slice(0, 4)
        })
      );
  }

  eatSushiAndDeductCredits = sushi => {
    if (!this.state.eatenSushis.find(s => s.id === sushi.id)) {
      const credits = this.state.credits - sushi.price;
      if (credits >= 0) {
        this.setState({
          credits,
          eatenSushis: [...this.state.eatenSushis, sushi]
        });

        const availableSushis = [...this.state.availableSushis];
        const sushiIndex = availableSushis.indexOf(
          availableSushis.find(s => s.id === sushi.id)
        );
        availableSushis.splice(sushiIndex, 1); //remove selected sushi from availableSushis
        this.setState({ availableSushis });
      } else {
        alert("Please pick a cheaper sushi or topup!");
      }
    }
  };

  handleDisplayedSushis = () => {
    let n = this.state.displayedSushis[3].id;
    if (n >= this.state.allSushis.length) {
      n = 0;
    }
    const allSushis = [...this.state.allSushis];
    const displayedSushis = allSushis.slice(n, n + 4);
    this.setState({ displayedSushis });
  };

  handleTopup = e => {
    e.preventDefault();
    const credits = this.state.credits + parseInt(e.target.amount.value, 10);
    this.setState({ credits });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          displayedSushis={this.state.displayedSushis}
          onDisplayedSushis={() => this.handleDisplayedSushis()}
          eatenSushis={this.state.eatenSushis}
          eatSushi={sushi => this.eatSushiAndDeductCredits(sushi)}
        />
        <Table
          eatenSushis={this.state.eatenSushis}
          credits={this.state.credits}
          onTopup={e => this.handleTopup(e)}
        />
      </div>
    );
  }
}

export default App;
