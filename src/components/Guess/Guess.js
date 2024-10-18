import React from 'react';
import { checkGuess } from '../../game-helpers';

function Guess({guess, answer}) {

  const row = new Array(5).fill('');

  if(!guess.length) return row.map(() => <span className="cell" key={crypto.randomUUID()} ></span>)

  const guessResult = checkGuess(guess, answer);
  console.log(guessResult);
  
  return (
    guessResult.map((char, idx) => {
      return <span className={`cell ${char.status}`} key={idx}> {char.letter} </span>
    })
  );
}

export default Guess;
