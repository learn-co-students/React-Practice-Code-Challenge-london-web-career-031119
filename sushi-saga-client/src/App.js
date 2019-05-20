import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

state = {
  sushi: [],
  renderedSushi: [],
  eatenSushi: []
}

componentDidMount() {
  fetch(API).then(resp => resp.json())
  .then(sushi => this.setState({sushi}))
  .then(() => this.getFourSushis())
}

getFourSushis = () => {
  this.setState({
    renderedSushi: this.state.sushi.slice(0,4),
    sushi: this.state.sushi.slice(4)
  })
}
handleClick = (sushi) => {
  // debugger
  
   this.setState({eatenSushi: [...this.state.eatenSushi, sushi]})
}
  
  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} 
                        handleClick={this.handleClick} 
                        eatenSushi={this.state.eatenSushi} 
                        renderSushi={this.state.renderedSushi}
                        getFourSushis={this.getFourSushis}
                        />
        <Table sushi={this.state.sushi} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;