// Write a function, which will be given a single number. Your task is to find the sum of its digits.
function getSumOfAGivenNumbersDigits(number){

    let sum = 0;

    let numberString = Math.abs(number).toString();

    for (let char of numberString) {        
        sum += parseInt(char);
    }

    console.log(sum);
}

getSumOfAGivenNumbersDigits(12);