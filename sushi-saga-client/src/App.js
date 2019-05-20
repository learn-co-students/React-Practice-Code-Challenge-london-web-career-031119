import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import axios from "axios";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    currIndex: 0,
    endIndex: 4,
    remainingMoney: 200
  };
  componentDidMount() {
    this.fetchSushi();
  }

  fetchSushi = () => {
    axios
      .get(API)
      .then(res => this.setState({ sushis: res.data }))
      .catch(err => console.log(err));
  };

  getCurrent = () => {
    return this.state.sushis.slice(this.state.currIndex, this.state.endIndex);
  };

  handleClick = () => {
    this.setState({
      currIndex: this.state.currIndex + 4,
      endIndex: this.state.endIndex + 4
    });
  };

  eatSushi = (e, price) => {
    if (this.state.remainingMoney - price > 0 && e.target.tagName === "IMG") {
      this.setState({ remainingMoney: this.state.remainingMoney - price });
      e.target.parentNode.removeChild(e.target);
    }
  };

  render() {
    return (
      <div className="app">
        {this.state.sushis && (
          <SushiContainer
            eatSushi={this.eatSushi}
            handleClick={this.handleClick}
            sushis={this.getCurrent()}
          />
        )}
        <Table money={this.state.remainingMoney} />
      </div>
    );
  }
}

export default App;
