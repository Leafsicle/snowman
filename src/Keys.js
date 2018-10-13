import React, { Component } from 'react'

class Keys extends Component {
  state = {
    letter: [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ]
  }

  render() {
    return (
      <div class="buttons">
        {this.state.letter.map(letter => (
          <button>{letter}</button>
        ))}
      </div>
    )
  }
}

export default Keys
