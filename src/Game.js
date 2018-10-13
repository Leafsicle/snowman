import React, { Component } from 'react'
import Keys from './Keys'
import Word from './Word'

class Game extends Component {
  render() {
    return (
      <div class="board">
        <h1>Do you wanna build a snowman?</h1>
        <img class="snow" src="./images/step_0.png" />
        <Word />
        <Keys />
      </div>
    )
  }
}

export default Game
