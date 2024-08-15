function pyramidConstruction(base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let height = 0;

    // Loop to build each level of the pyramid
    while (base > 0) {
        height++;
        let currentLevelArea = base * base;
        let innerStoneArea = (base - 2) * (base - 2);

        if (base - 2 > 0) {  // for levels other than the top-most level
            let stoneRequired = innerStoneArea * increment;
            totalStone += stoneRequired;

            let outerDecorArea = currentLevelArea - innerStoneArea;
            if (height % 5 === 0) {
                totalLapis += outerDecorArea * increment;
            } else {
                totalMarble += outerDecorArea * increment;
            }
        } else {  // top-most level made entirely of gold
            totalGold += currentLevelArea * increment;
        }

        base -= 2;  // each level reduces by 2 units on both dimensions
    }

    // Final pyramid height
    let pyramidHeight = Math.floor(height * increment);

    // Output results, rounding up where necessary
    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${pyramidHeight}`);
}

// Test cases
pyramidConstruction(11, 1);
pyramidConstruction(11, 0.75);
pyramidConstruction(12, 1);
pyramidConstruction(23, 0.5);