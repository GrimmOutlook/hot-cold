import React from 'react';  //, { Component } from 'react';

import What from './components/what';
import NewGame from './components/new-game';
import Indicator from './components/indicator';
import GuessForm from './components/guess-form';
import GuessNumber from './components/guess-number';
import GuessesTracker from './components/guesses-tracker';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      whatButton: true,
      newGameButton: true,
      indicatorText: "Make Your Guess!",
      guessFormValue: null,
      errorMessage: '',
      guessTotal: 0,
      guessTrackerArray: [],
      answerValue: Math.floor(Math.random()*(101-0))
    };
  }

  toggleWhat(){
    this.setState({
    // onClick in what component, toggle boolean value
      whatButton: !this.state.whatButton
    });
  }

  refreshGame(){
    this.setState({
    // onClick in new-game component, toggle boolean value AND reset all this state values to defaults
      whatButton: true,
      newGameButton: true,
      indicatorText: "Make Your Guess! Testing!!!!!!!!!!",
      guessFormValue: null,
      guessTotal: 0,
      guessTrackerArray: [],
      answerValue: Math.floor(Math.random()*(101-0))
    });
  }

  changeIndicator(){
    this.setState({

    // when button in guess-form component is clicked, compare value entered in form field (which is this.state.guessFormValue) to this.state.answerValue:
      // if equal, game is over.  setState of all this.state items to appropriate values.
      // if within 10, change this.state.indicatorText to "Hot" & update guessTrackerArray
      // if difference > 10, change this.state.indicatorText to "Cold" & update guessTrackerArray
    });
  }

  captureFormValue(){

      if (this.state.guessFormValue < 0 || this.state.guessFormValue > 100 || isNaN(this.state.guessFormValue)){
        this.setState({errorMessage: "Guess must be a number between 0 and 100."})
      }
      else if (this.state.guessTrackerArray.includes(this.state.guessFormValue)){
        this.setState({errorMessage: "You guessed this number already."})
      }
      else if (this.state.guessFormValue === this.state.answerValue){
        this.setState({
          indicatorText: "You Won!",
          guessFormValue: null
        })
      }
      else if (Math.abs(this.state.guessFormValue - this.state.answerValue) <= 10){
        this.setState({
          indicatorText: "Hot",
          guessTotal: this.state.guessTotal + 1,
          guessTrackerArray: this.state.guessTrackerArray.push(this.state.guessFormValue)
        })
      }
      else {
        this.setState({
          indicatorText: "Cold",
          guessTotal: this.state.guessTotal + 1,
          guessTrackerArray: this.state.guessTrackerArray.push(this.state.guessFormValue)
        })
      }
      // get the value from the form:
        // if value is > 100 or < 0, trigger error modal popup (a separate component w/error prop?)
        // if value is contained within this.state.guessTrackerArray, trigger error modal popup (a separate component w/error prop?)
        // if value is NaN, trigger error modal popup (a separate component w/error prop?)
        // if value is equal, within 10, or more than 10 away - repeat of the changeIndicator fxn?

  }

  changeGuessTotal(){
    this.setState({
      // whenever button is clicked & form value is valid, increment this.state.guessTotal by 1
    })
  }

  changeTrackerArray(){
    this.setState({
      // push value from this.state.guessFormValue into this.state.guessTrackerArray
    })
  }






  render() {
    return (
    <div className="div-for-everything-so-i-dont-get-an-error">
      <header>
        <nav>
          <What instructions={() => this.toggleWhat()} whatButton={this.state.whatButton}/>
          <NewGame refresh={e => this.refreshGame()}/>
        </nav>
      </header>
      <div className="main-container">
        <h1>Hot or Cold</h1>
        <div className="indicator">
          <Indicator changeIndicator={this.state.indicatorText}/>
        </div>
        <div className="guess-form">
          <GuessForm errorMessage={this.state.errorMessage}/>
        </div>
        <div className="guess-number">
          <GuessNumber total={this.state.guessTotal}/>
        </div>
        <div className="guess-tracker">
          <GuessesTracker tracker={this.state.guessTrackerArray}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
