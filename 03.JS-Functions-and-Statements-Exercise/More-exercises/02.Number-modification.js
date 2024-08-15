function numberModification(num) {
    // Function to calculate the average of the digits
    function getAverageOfDigits(number) {
        const digits = number.toString().split('').map(Number);
        const sum = digits.reduce((a, b) => a + b, 0);
        return sum / digits.length;
    }

    // Check the average and modify the number if necessary
    while (getAverageOfDigits(num) <= 5) {
        num = num * 10 + 9;  // Append 9 to the end of the number
    }

    console.log(num);
}

// Test cases
numberModification(101);   // Output: 1019999
numberModification(5835);  // Output: 5835