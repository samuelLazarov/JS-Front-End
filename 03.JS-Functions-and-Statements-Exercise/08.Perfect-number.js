function findPerfectNumber(number){
    if (number <= 0) {
        console.log('It\'s not so perfect.');
    }

    let devisorSum = 0;

    for (let i = 1; i < number; i++) {        
        if (number % i === 0) {
            devisorSum += i;
        }        
    }

    if (devisorSum === number) {
        console.log('We have a perfect number!');
    }
    else{
        console.log('It\'s not so perfect.');
    }

}

findPerfectNumber(28);


function isNumberPerfect(number) {
    const notPerfectMessage = "It's not so perfect.";
  
    if (number < 0 || !Number.isInteger(number)) {
      console.log(notPerfectMessage);
      return;
    }
  
    function getDivisors(n) {
      const half = n / 2;
      const divisors = [];
  
      for (let currentNumber = 1; currentNumber <= half; currentNumber++) {
        if (n % currentNumber !== 0) {
          continue;
        }
  
        divisors.push(currentNumber);
      }
  
      return divisors;
    }
  
    const sumDivisors = (numberArr) => numberArr.reduce((a, b) => a + b, 0);
  
    const divisors = getDivisors(number);
    const message =
      sumDivisors(divisors) === number
        ? "We have a perfect number!"
        : "It's not so perfect.";
  
    console.log(message);
  }
  
  isNumberPerfect(28); // We have a perfect number!
  isNumberPerfect(1236498); // It's not so perfect.

