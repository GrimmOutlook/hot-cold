import React from 'react';

//  Initial state = placeholder form field w/submit button
//  take number submitted as a value

//  Use Search exercise form component?

export default function GuessForm() {
  return(
    <form>
      <input type="text" name="userGuess" id="userGuess" maxlength="3" placeholder="Enter your Guess" required/>
      <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
    </form>
  )
}
