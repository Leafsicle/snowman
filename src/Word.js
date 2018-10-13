import React, { Component } from 'react'
import words from './words.json'

class Word extends Component {
	render() {
		let game = () => {
			let randomize = Math.floor(Math.random() * words.length)
			let word = words[randomize]
			let letters = word.split('')
			// console.log(letters)
			letters.map(letter => {
				return letter('')
			})
		}

		// this.setState({
		// 	gameChoice: gameletters
		// })

		return (
			<div>
				<div class="guess">
					{game()}
					{/* when the word is generated we need to split and map to the game choice array.
          once in the array when the player clicks a letter button, the playerchoice array is populated  and compared*/}
				</div>
			</div>
		)
	}
}

export default Word
