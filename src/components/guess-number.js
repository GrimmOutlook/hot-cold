import React from 'react';

// Initial state = zero
// Increments by one everytime the guess form button is clicked

export default function GuessNumber(props) {
  return (
    <div className="guess-number">
      <h2>Guess #<span>{props.total}</span>!</h2>
    </div>
  )
}
