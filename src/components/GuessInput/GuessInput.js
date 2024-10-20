import React, {useState} from 'react';
import { GAME_STATUS } from '../../constants';

function GuessInput({guessList, setGuessList, answer, gameStatus, setGameStatus}) {

  const [guess, setGuess] = useState('')

  const handleSubmitGuess = (e) => {
    e.preventDefault();
    if(guess.length < 5) {
      window.alert('Guess should have 5 characters');
      return
    };

    if(guess === answer) {
      setGameStatus(GAME_STATUS.won);
    } else if(guessList.length === 5) {
      setGameStatus(GAME_STATUS.lost);
    }

    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={(evt) => handleSubmitGuess(evt)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input"
        type="text" 
        maxLength="5" 
        minLength="5" 
        value={guess}
        required
        disabled={gameStatus !== GAME_STATUS.ongoing}
        onChange={(e) => {setGuess(e.target.value.toUpperCase())}}/>
    </form>
  );
}

export default GuessInput;
