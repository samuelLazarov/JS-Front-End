function addAndSubstract (firstNumber, secondNumber, thirdNumber) {
    const sum = (a, b) => a + b;
    const substract = (a, b) => a - b;

    console.log(substract(sum(firstNumber,secondNumber), thirdNumber));
 }

 addAndSubstract(23, 6, 10);
 

 function addAndSubtractVariant(firstNum, secondNum, thirdNum) {
    const sumTwoNumbers = (x, y) => x + y;
    const subtractTwoNumbers = (x, y) => x - y;
  
    const secondResult = subtractTwoNumbers(
      sumTwoNumbers(firstNum, secondNum),
      thirdNum
    );
  
    console.log(secondResult);
  }
  
  addAndSubtractVariant(23, 6, 10);