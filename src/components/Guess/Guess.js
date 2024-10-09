import React from 'react';

function Guess({guess}) {

  const row = new Array(5).fill('');

  if(!guess.length) return row.map(() => <span className="cell" key={crypto.randomUUID()} ></span>) 
  
  return (
    guess.split('').map((char, idx) => {
      return <span className="cell" key={idx}> {char} </span>
    })
  );
}

export default Guess;
