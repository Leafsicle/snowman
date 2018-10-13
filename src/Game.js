import React, { Component } from 'react'
import Keys from './Keys'
import Word from './Word'

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
		return (
			<div class="board">
				<h1>Do you wanna build a snowman?</h1>
				<img class="snow" src="./images/step_0.png" />
				<Word />
				<Keys letter={this.state.letter} />
				<button className="play-again">Play Again</button>
				<button>rando</button>
			</div>
		)
	}
}

export default Game
