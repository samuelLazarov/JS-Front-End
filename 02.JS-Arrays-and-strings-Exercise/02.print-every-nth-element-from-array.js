function printEveryNthElement(array, step) {
    let result = [];

    for (let i = 1; i <= array.length; i += step) {
        const element = array[i-1];
        result.push(element);
    }

    return console.log(result);
}

printEveryNthElement(['5', '20', '31', '4', '20'], 2);