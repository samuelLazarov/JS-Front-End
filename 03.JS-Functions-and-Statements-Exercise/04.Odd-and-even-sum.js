function oddAndEvenSum(singleNumber) {
    const numberString = singleNumber.toString();

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numberString.length; i++){
        const digit = parseInt(numberString[i]);

        if (digit % 2 === 0){
            evenSum += digit;
        } else {
            oddSum += digit;
        }

    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);

function printOffAndEvenSum (number) {

    const getEvenAndOddDigits = (x) => {
        const evenDigits = [];
        const oddDigits = [];

        let currentNumber = x;

        while (currentNumber > 0) {
            const lastDigit = currentNumber % 10;

            if (lastDigit % 2 === 0) {
                evenDigits.push(lastDigit)
            } else { 
                oddDigits.push(lastDigit);
            }

            currentNumber = parseInt(currentNumber / 10);
        }
        
        return [
            evenDigits,
            oddDigits
        ]
    };

    const getSumOfDigits = (array) => array.reduce((a, b) => a + b, 0);
    const printOutputResult = (evenSum, oddSum) => console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    const [evenDigits, oddDigits] = getEvenAndOddDigits(number);
    
    const evenSum = getSumOfDigits(evenDigits);
    const oddSum = getSumOfDigits(oddDigits);

    printOutputResult(evenSum, oddSum);
}

printOffAndEvenSum(1234); 
