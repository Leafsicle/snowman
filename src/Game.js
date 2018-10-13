import React, { Component } from 'react'

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
				<div>
					<button>a</button>
					<button>b</button>
					<button>c</button>
					<button>d</button>
					<button>e</button>
					<button>f</button>
					<button>g</button>
					<button>h</button>
					<button>i</button>
					<button>j</button>
					<button>k</button>
					<button>l</button>
					<button>m</button>
					<button>n</button>
					<button>o</button>
					<button>p</button>
					<button>q</button>
					<button>r</button>
					<button>s</button>
					<button>t</button>
					<button>u</button>
					<button>v</button>
					<button>w</button>
					<button>x</button>
					<button>y</button>
					<button>z</button>
				</div>
			</div>
		)
	}
}

export default Game
