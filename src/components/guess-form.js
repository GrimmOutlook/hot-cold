import React from 'react';

//  Initial state = placeholder form field w/submit button
//  take number submitted as a value

//  Use Search exercise form component?

export default function GuessForm(props) {
    let error = '';

    if(!(props.errorMessage==='')){
      error = <h3>{props.errorMessage}</h3>
    }

    return(
      <div>
        {error}

        <form onSubmit={e => {e.preventDefault(); props.submitProp()}}>
          <input type="text" name="userGuess" id="userGuess" maxLength="3" placeholder="Enter your Guess" value={props.currentGuess} onChange={e => props.userInput(e.target.value)} required/>

          <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
        </form>
      </div>
    )
}
