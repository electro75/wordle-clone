import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guessList, setGuessList] = useState([]);

  return (
    <GuessInput guessList={guessList} setGuessList={setGuessList} />
  );
}

export default Game;
