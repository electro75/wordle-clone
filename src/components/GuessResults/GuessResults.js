import React from 'react';
import Guess from '../Guess';

function GuessResults({ guessList }) {
  const rows = new Array(5).fill('');
  const cols = new Array(6).fill(rows);

  const getGuess = (guessNumber) => {
    if(!guessList.length) return <Guess guess=''/>
    if(guessNumber < guessList.length) {
      return <Guess guess={guessList[guessNumber]} />
    }
    return <Guess guess=''/>
  }

  return (
    <div className="guess-results">
      {cols.map((row, index) => (
        <p className="guess" key={crypto.randomUUID()}>
          {getGuess(index)}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
