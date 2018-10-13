import React, { Component } from 'react'
import words from './words.json'

class Word extends Component {
	render() {
		let game = () => {
			let randomize = Math.floor(Math.random() * words.length)
			let word = words[randomize]
			console.log(word)
			// let letters = word.split('')
			// let gameletters = this.state.gameChoice
		}

		return (
			<div>
				<div class="guess">
					{game(<p />)}
					{/* when the word is generated we need to split and map to the game choice array.
          once in the array when the player clicks a letter button, the playerchoice array is populated  and compared*/}
				</div>
			</div>
		)
	}
}

export default Word
