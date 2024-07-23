// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.

function checkIfAllNumberDigitsAreSame(number){
    let numberInString = Math.abs(number).toString();

    let firstDigit = numberInString[0];
    let sum = 0;
    let isSame = true;

    for (const digit of numberInString) {

        sum += parseInt(digit);
        if(firstDigit != digit){
            isSame = false;
        }    
    }

    console.log(isSame);
    console.log(sum);
}

checkIfAllNumberDigitsAreSame(1234);