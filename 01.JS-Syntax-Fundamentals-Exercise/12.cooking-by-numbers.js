// Write a program that receives 6 parameters which are a number and a list of five operations. Perform the operations sequentially by starting with the input number and using the result of every operation as a starting point for the next one. Print the result of every operation in order. The operations can be one of the following:
// •	chop - divide the number by two
// •	dice - square root of a number
// •	spice - add 1 to the number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from the number


function cookByNumbers(start, ...operations){

    let number = parseFloat(start);

    const operationsMap = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.8
    };

    for (let operation of operations) {

        if(!operationsMap.hasOwnProperty(operation)){
            continue;
        }
        number = operationsMap[operation](number);
        console.log(number);
    }
}

cookByNumbers('32', 'chop', 'chop', 'mur', 'chop', 'chop','chop');