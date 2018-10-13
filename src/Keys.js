import React, { Component } from 'react'

class Keys extends Component {
  handleLetterClick = () => {
    console.log(`clicked on ${this.props.letter} at ${this.props.position}`)
  }

  render() {
    return <button onClick={this.handleLetterClick}>{this.props.letter}</button>
  }
}

export default Keys
