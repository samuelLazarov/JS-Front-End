function factorialDevision(firstNumber, secondNumber){
    const factorial = (n) =>{ //Recommend using recursion: Simplier 
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    const firstFactorial = factorial(firstNumber);
    const secondFactorial = factorial(secondNumber);

    const result = firstFactorial / secondFactorial;

    console.log(result.toFixed(2));

}

factorialDevision(5, 2);


function factorialDivision2(firstNumber, secondNumber) {
    const findFactorial = (n) => {
      if (n < 0) {
        return -1;
      }
  
      if (n === 0) {
        return 1;
      }
  
      return n * findFactorial(n - 1);
    };
  
    const result = findFactorial(firstNumber) / findFactorial(secondNumber);
  
    console.log(result.toFixed(2));
}
  
factorialDivision2(6, 3);

