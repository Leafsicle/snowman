import React, { Component } from 'react'

class RandomLetter extends Component {
	showLetter = (letter, visible) => (visible ? letter : '_')

	render() {
		return (
			<div>
				{this.props.secret.map((secretLetter, i) => {
					return (
						<span key={i} className="letter">
							{this.showLetter(secretLetter.letter, secretLetter.visible)};
						</span>
					)
				})}
			</div>
		)
	}
}

export default RandomLetter
