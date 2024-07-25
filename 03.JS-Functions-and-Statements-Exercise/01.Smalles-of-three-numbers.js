function printSmallestOfThree(firstNumer, secondNumber, thirdNumber){
    const arrayOfThree = [firstNumer, secondNumber, thirdNumber];

    arrayOfThree.sort((a, b) => a - b);

    const smallestOfThree = arrayOfThree.shift();

    console.log(smallestOfThree);
}

printSmallestOfThree(2, 5, 3);

function smallestOfThreeNumbers (a,b,c) {
    if(a < b && a < c) {
        console.log(a)
    } else if (b < c) {
        console.log(b)
    } else {
        console.log(c)
    }
}

smallestOfThreeNumbers([2,3,1]);


// (a, b, c) => console.log(Math.min(a, b, c))