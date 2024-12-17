/* . function play(userChoice)
यह play नाम का एक फ़ंक्शन है।
इसे यूज़र का चयन (जैसे: "stone", "paper" या "scissors") इनपुट के रूप में दिया जाता है।*/
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
