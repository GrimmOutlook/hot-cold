import React from 'react';

//  Initial state = "Make Your Guess!"
//  Upon first guess submitted = evaluate whether hot or cold
//  Must know the actual correct number in order to determine hot or cold

export default function Indicator(props) {
  return (
    <div className="indicator">
      <h3>{props.changeIndicator}</h3>
    </div>
  )
}
