import React from 'react';

function ResultBanner({didUserWin, guessList, answer}) {
  if(didUserWin) {
    return (
      <div className='happy banner' >
        <p>
          <strong> Congratulations! </strong> Got it in <strong> {guessList.length} guesses</strong>
        </p>
      </div>
    )
  }
  else {
    return (
      <div className='sad banner' >
        <p>
          Sorry the answer is <strong> {answer} </strong>
        </p>
      </div>
    )
  }
}

export default ResultBanner;
