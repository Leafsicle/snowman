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

<<<<<<< HEAD
		let wordBoard = this.state.letter.map((letter, index) => {
			return <Keys key={index} position={index} letter={letter} />
		})

		return (
			<div class="board">
				<h1>Do you wanna build a snowman?</h1>
				<img
					class="snow"
					alt="This is a Snow-person"
					src="./images/step_0.png"
				/>

				<Word game={game()} />
				<div className="buttons">{wordBoard}</div>
				<button className="play-again">Play Again</button>
			</div>
		)
	}
=======
    let wordBoard = this.state.letter.map((letter, index) => {
      return <Keys key={index} position={index} letter={letter} />
    })

    return (
      <div class="board">
        <h1>Do you wanna build a snowman?</h1>
        <img
          class="snow"
          alt="This is a Snow-person"
          src="./images/step_0.png"
        />

        <Word game={game()} />
        <div className="buttons">{wordBoard}</div>
        <button className="play-again">
          <a className="play-again" href="/">
            Play Again
          </a>
        </button>
      </div>
    )
  }
>>>>>>> 4af21c261926ad7fdc9f5e6bee89eae91736b1c5
}

export default Game
