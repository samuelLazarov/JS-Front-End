function numbersSorting (numbers) {
    let sortedNumbers = numbers.sort((a, b) => a - b);
    const sortedNumbersArr = [];

    while (sortedNumbers.length > 0) {
        let firstNumber = sortedNumbers.shift();
        let lastNumber = sortedNumbers.pop();

        sortedNumbersArr.push(firstNumber);

        if (lastNumber){
            sortedNumbersArr.push(lastNumber);
        }
    }
        
    return sortedNumbersArr;
}

console.log(numbersSorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

function sortingNumbers(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const outputArr = new Array(sortedArr.length).fill(0).map((_, index) => {
        
    })
}