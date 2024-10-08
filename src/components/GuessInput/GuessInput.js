import React, {useState} from 'react';

function GuessInput() {

  const [guess, setGuess] = useState('')

  const handleSubmitGuess = (e) => {
    e.preventDefault();
    if(guess.length < 5) {
      window.alert('Guess should have 5 characters');
      return
    };

    console.log(guess);
    setGuess('')
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
        onChange={(e) => {setGuess(e.target.value.toUpperCase())}}/>
    </form>
  );
}

export default GuessInput;
