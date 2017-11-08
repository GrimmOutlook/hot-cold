import React from 'react';


// Initial state = empty array
// Push guess entered into form into the array each time the guess-form button is clicked

export default function GuessesTracker() {

  const priorGuesses = [50, 25, 12, 7, 3, 5];
  const priorGuessesDisplay = priorGuesses.map((guess, index) =>
      <li key={index}>
        {guess}
      </li>
    )

  return (
    <ol className="guess-list">
      <li>{priorGuessesDisplay}</li>
    </ol>
  )
}
