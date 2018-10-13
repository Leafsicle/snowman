import React, { Component } from 'react'
import Keys from './Keys'
import Word from './Word'
import words from './words.json'

class Game extends Component {
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
    ],
    playerChoice: [],
    gameChoice: []
  }

  render() {
    let game = () => {
      let randomize = Math.floor(Math.random() * words.length)
      let word = words[randomize]
      let letter = word.split('')
      let mappedLetter = letter.map((letter, index) => {
        return <p>{letter}</p>
      })
      return mappedLetter
    }

    return (
      <div class="board">
        <h1>Do you wanna build a snowman?</h1>
        <img
          class="snow"
          alt="This is a Snow-person"
          src="./images/step_0.png"
        />
        <Word game={game()} />
        <Keys letter={this.state.letter} />
        <button className="play-again">Play Again</button>
      </div>
    )
  }
}

export default Game
