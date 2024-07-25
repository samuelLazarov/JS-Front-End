function checkPalindroms(positiveNumbers) {
    const isPalindrome = (positiveNumber) => {
        const numberString = positiveNumber.toString();

        let left = 0;
        let right = numberString.length - 1;

        while (left < right) {
            if (numberString[left] !== numberString[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    };

    positiveNumbers.forEach(number => {
        if (isPalindrome(number)){
            console.log(true)
        } else {
            console.log(false);
        }
    })
}

function findPalindromeNumbers(numbersArr) {
    function determinateIsNumberAPalindrome(number) {
        const reversedNumber = Number(number.toString().split("").reverse().join(""));
        return number === reversedNumber;
    }
    
    numbersArr.forEach((number) => {
        console.log(determinateIsNumberAPalindrome(number));
    });
}

checkPalindroms([123,323,421,121]);

findPalindromeNumbers([123,323,421,121]);

