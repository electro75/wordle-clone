import React from 'react';

function GuessResults({ guessList }) {
  const rows = new Array(5).fill('');
  const cols = new Array(6).fill(rows);

  const getRow = (guessNumber) => {
    const emptyRow = rows.map(() => <span className="cell" key={crypto.randomUUID()} ></span>) 
    if(!guessList.length) return emptyRow

    if(guessNumber < guessList.length) {
      const guess = guessList[guessNumber];
      return (
          guess.split('').map((char, idx) => {
            return <span className="cell" key={idx}> {char} </span>
          }
        )
      )
    }

    return emptyRow
  }

  return (
    <div className="guess-results">
      {/* {guessList.map((guess) => (
        <p className="guess" key={crypto.randomUUID()}>{guess}</p>
      ))} */}
      {cols.map((row, index) => (
        <p className="guess" key={crypto.randomUUID()}>
          {getRow(index)}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
