import React from 'react';  //, { Component } from 'react';

import What from './components/what';
import NewGame from './components/new-game';
import Indicator from './components/indicator';
import GuessForm from './components/guess-form';
import GuessNumber from './components/guess-number';
import GuessesTracker from './components/guesses-tracker';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div className="div-for-everything-so-i-dont-get-an-error">
      <header>
        <nav>
          <What />
          <NewGame />
        </nav>
      </header>
      <div className="main-container">
        <h1>Hot or Cold</h1>
        <div className="indicator">
          <Indicator />
        </div>
        <div className="guess-form">
          <GuessForm />
        </div>
        <div className="guess-number">
          <GuessNumber />
        </div>
        <div className="guess-tracker">
          <GuessesTracker />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
