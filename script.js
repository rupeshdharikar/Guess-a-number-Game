'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ no number';
  }

  //  When guess is too high
  else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
      //  When player looses
    } else {
      document.querySelector('.message').textContent = '‼ you loose the game';
      document.querySelector('.score').textContent = 0;
    }
    //  When guess is too low
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
    //  When player looses
    else {
      document.querySelector('.message').textContent = '‼ you loose the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  //  When playen wins
  else if (guess === secretNum) {
    document.querySelector('.message').textContent = 'Correct Number 🏆🏆...';
    // document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
