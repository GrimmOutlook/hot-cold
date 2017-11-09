import React from 'react';

//  Initial state = placeholder form field w/submit button
//  take number submitted as a value

//  Use Search exercise form component?

export default function GuessForm(props) {

    if(!props.errorMessage===''){
      return(<h3>${props.errorMessage}</h3>)
    }

    return(
      <form>
        <input type="text" name="userGuess" id="userGuess" maxLength="3" placeholder="Enter your Guess" required/>
        <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
      </form>
    )
}
