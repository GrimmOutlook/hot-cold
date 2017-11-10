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
      guessFormValue: '',
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
      indicatorText: "Make Your Guess!",
      guessFormValue: '',
      guessTotal: 0,
      guessTrackerArray: [],
      answerValue: Math.floor(Math.random()*(101-0))
    });
  }

  setStuff(value){
      this.setState({
        guessFormValue: value
      })
  }

  captureFormValue(value){
      this.setState({errorMessage: ''})

      if (this.state.guessFormValue < 0 || this.state.guessFormValue > 100 || isNaN(this.state.guessFormValue)){
        this.setState({errorMessage: "Guess must be a number between 0 and 100."})
      }
      else if (this.state.guessTrackerArray.includes(this.state.guessFormValue)){
        this.setState({errorMessage: "You guessed this number already."})
      }
      else if (+this.state.guessFormValue === +this.state.answerValue){
        this.setState({
          indicatorText: "You Won!",
          guessFormValue: ''
        })
      }
      else if (Math.abs(this.state.guessFormValue - this.state.answerValue) <= 10){
        const newArray = [...this.state.guessTrackerArray, this.state.guessFormValue]
        this.setState({
          indicatorText: "Hot",
          guessTotal: this.state.guessTotal + 1,
          guessTrackerArray: newArray,
          guessFormValue: ''
        })
      }
      else {
        const newArray = [...this.state.guessTrackerArray, this.state.guessFormValue]
        this.setState({
          indicatorText: "Cold",
          guessTotal: this.state.guessTotal + 1,
          guessTrackerArray: newArray,
          guessFormValue: ''
        })
      }

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
          <GuessForm errorMessage={this.state.errorMessage} userInput={(value) => this.setStuff(value)} submitProp={() => this.captureFormValue()} currentGuess={this.state.guessFormValue}/>
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
