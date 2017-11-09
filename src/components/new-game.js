import React from 'react';




export default function NewGame(props) {
  return (
    <div className="new-game">
      <button onClick={props.refresh}>New Game</button>
    </div>
  )
}
