import React, { Component } from 'react'

class Word extends Component {
  render() {
    return (
      <div>
        <div class="guess">
          {this.props.game}
          {/* when the word is generated we need to split and map to the game choice array.
          once in the array when the player clicks a letter button, the playerchoice array is populated  and compared*/}
        </div>
      </div>
    )
  }
}

export default Word
