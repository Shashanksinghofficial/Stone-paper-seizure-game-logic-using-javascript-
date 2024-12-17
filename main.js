/* . function play(userChoice)
यह play नाम का एक फ़ंक्शन है।
इसे यूज़र का चयन (जैसे: "stone", "paper" या "scissors") इनपुट के रूप में दिया जाता है।*/
function play(userChoice) {
  /*
यह एक array है, जिसमें तीन ऑप्शंस होते हैं: stone, paper, और scissors।
कंप्यूटर इन्हीं में से एक विकल्प चुनेगा।*/
  var choices = ['stone', 'paper', 'scissors'];
  /*Math.random() एक यादृच्छिक(random) संख्या बनाता है जो 0 और 1 के बीच होती है।
Math.random() * 3 का मतलब है यह संख्या 0 से 3 के बीच होगी।
Math.floor() इसका फ्लोर वैल्यू(पूर्णांक) बनाता है, ताकि 0, 1, या 2 में से एक वैल्यू मिले।*/
  var randomIndex = Math.floor(Math.random() * 3);
  /*choices नाम की array में randomIndex की मदद से stone, paper, या scissors चुना जाता है।*/
  var computerChoice = choices[randomIndex];
/*एक खाली वैरिएबल result बनाया गया है, जिसमें जीत या हार का नतीजा स्टोर होगा।*/
  var result = '';
/*if (userChoice === computerChoice)
यहाँ जाँच की जाती है कि यूज़र का चयन और कंप्यूटर का चयन समान है या नहीं।
अगर हाँ, तो result = 'It\'s a tie!'; यानी यह "टाई" है।*/
  if (userChoice === computerChoice) {
    result = 'It\'s a tie!';
    /*यहाँ यह जाँच होता है कि यूज़र जीत रहा है या नहीं।
जीत की तीन शर्तें:
अगर userChoice 'stone' है और computerChoice 'scissors'।
अगर userChoice 'paper' है और computerChoice 'stone'।
अगर userChoice 'scissors' है और computerChoice 'paper'।
इन शर्तों में result = 'You win!'; सेट होता है।*/
  } else if (
    (userChoice === 'stone' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'stone') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
    /*else { result = 'You lose!'; }
अगर ऊपर की दोनों स्थितियाँ गलत हैं, तो इसका मतलब है कि कंप्यूटर जीत गया।
result में "You lose!" स्टोर होता है।*/
  } else {
    result = 'You lose!';
  }
/*यह लाइन HTML में "result" नाम के ID वाले एलिमेंट को अपडेट करती है।
इसमें यह टेक्स्ट दिखाया जाता है:
यूज़र का चयन क्या था।
कंप्यूटर का चयन क्या था।
और खेल का नतीजा (जीत, हार, या टाई)।*/
  document.getElementById('result').innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}
