const PubSub = require('../helpers/pub_sub');

const ResultView = function(){
}

ResultView.prototype.displayResult = function (primechecker) {
  const resultElement = document.querySelector('#result');
  if (primechecker) {
    resultElement.textContent = "Yes, It's a prime number.";
  } else {
    resultElement.textContent = "No, it's not a prime number.";
  }
};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const primeChecker = event.detail;
    this.displayResult(primeChecker);
  });
}

module.exports = ResultView;
