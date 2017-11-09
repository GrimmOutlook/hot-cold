import React from 'react';


//  Initial state = just text
//  onClick = popup window
//  Popup window has its own onClick button/event
//  onClick of popup window button = back to main app

export default function What(props) {
  if(props.whatButton){
    return (
      <div className="what">
        <button onClick={props.instructions}>What?</button>
      </div>
    )
  }

  return (
    <div className="instructions-modal">
      Here are instructions!
      <button onClick={props.instructions}>Go back to the Game!</button>
    </div>
  )
}
