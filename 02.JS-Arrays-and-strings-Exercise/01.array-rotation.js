function arrayRotation (array, numberOfRotations) {
    const actualRotation = numberOfRotations % array.length;
    for (let i =0; i<actualRotation; i++){
        const firstNumber = array.shift();
        array.push(firstNumber);
    }

    console.log(array.join(' '));

}

arrayRotation([51, 47, 32, 61, 21], 2);