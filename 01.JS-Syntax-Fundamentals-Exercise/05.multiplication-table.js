// You will receive a number as a parameter. {number} X {times} = {product}
// Print the 10 times table for this number.

function printMultiplicationTableOfANumber(number){
   
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} X ${i} = ${result}`);
        
    }
}

printMultiplicationTableOfANumber(5);