function play(userChoice) {
  var choices = ['stone', 'paper', 'scissors'];
  var randomIndex = Math.floor(Math.random() * 3);
  var computerChoice = choices[randomIndex];

  var result = '';

  if (userChoice === computerChoice) {
    result = 'It\'s a tie!';
  } else if (
    (userChoice === 'stone' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'stone') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
  } else {
    result = 'You lose!';
  }

  document.getElementById('result').innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}
