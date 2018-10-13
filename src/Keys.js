import React, { Component } from 'react'

class Keys extends Component {
  render() {
    return (
      <div class="buttons">
        {this.props.letter.map(letter => (
          <button>{letter}</button>
        ))}
      </div>
    )
  }
}

export default Keys
