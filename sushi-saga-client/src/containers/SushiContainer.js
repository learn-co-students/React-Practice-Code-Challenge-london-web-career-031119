import React, { Component } from 'react'
import MoreButton from '../components/MoreButton'
import LessButton from '../components/LessButton'

import Sushi from '../components/Sushi'

class SushiContainer extends Component {

  state = {
    showing: 0,
    conveyor: null
  }

  componentDidMount() {
    this.setState({ conveyor: setInterval(this.moveConveyor, 2000) })
  }

  moveConveyor = () => {
    if (this.state.showing < 96) {
      this.setState({ showing: this.state.showing + 4 })
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.conveyor)
  }

  viewSushis = (dir) => {
    const { showing } = this.state
    const { sushis } = this.props
    if (showing < sushis.length - 4 &&
      dir === true) {
      this.setState({ showing: showing + 4 });
    }
    if (showing > 3 && dir === false) {
      this.setState({ showing: showing - 4 });
    }
  }

  render() {
    const { showing } = this.state
    const { sushis, eatSushi } = this.props
    return (
      <div className="belt">
        <LessButton viewSushis={this.viewSushis} />
        {sushis.slice(showing, showing + 4).map(sushi => <Sushi eatSushi={eatSushi} key={sushi.id} sushi={sushi} />)}
        <MoreButton viewSushis={this.viewSushis} />
      </div>
    );
  }

}

export default SushiContainer