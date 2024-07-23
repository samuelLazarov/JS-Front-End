// Write a function that displays numbers from given start to given end and their sum.
// The input comes as two number parameters. Print the result like the examples below:

function display_NumbersFrom_StartToEnd_And_TheirSum(start, end){
    let array = [];

    for (let i = start; i <= end; i++) {
        array.push(i);        
    }
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    console.log(...array);
    console.log(`Sum: ${sum}`);
}

display_NumbersFrom_StartToEnd_And_TheirSum(5, 10);