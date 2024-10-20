import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { GAME_STATUS } from '../../constants';
import ResultBanner from '../ResultBanner/ResultBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guessList, setGuessList] = useState([]);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.ongoing);

  const getBanner = () => {
    if(gameStatus === GAME_STATUS.won) {
      return <ResultBanner guessList={guessList} didUserWin={true} />
    }
    else {
      return <ResultBanner didUserWin={false} answer={answer} />
    }
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput 
        guessList={guessList} 
        setGuessList={setGuessList} 
        answer={answer} 
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}/>
      {gameStatus !== GAME_STATUS.ongoing ? <>{getBanner()}</> : <></>}        
    </>
  );
}

export default Game;
