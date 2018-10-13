import React, { Component } from 'react'
import Keys from './Keys'

class Game extends Component {
	render() {
		return (
			<div class="board">
				<h1>Do you wanna build a snowman?</h1>
				<img class="snow" src="./images/step_0.png" />
				<div class="guess">
					<p>_</p>
					<p>_</p>
					<p>_</p>
					<p>_</p>
					<p>_</p>
					<p>_</p>
					<p>_</p>
				</div>
				<Keys />
			</div>
		)
	}
}

export default Game
