function pointsValidation([x1, y1, x2, y2]) {
    function isValidDistance(x1, y1, x2, y2) {
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return Number.isInteger(distance);
    }

    // Check distance from (x1, y1) to (0, 0)
    if (isValidDistance(x1, y1, 0, 0)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    // Check distance from (x2, y2) to (0, 0)
    if (isValidDistance(x2, y2, 0, 0)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    // Check distance between (x1, y1) and (x2, y2)
    if (isValidDistance(x1, y1, x2, y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

// Test cases
pointsValidation([3, 0, 0, 4]);
// Output:
// {3, 0} to {0, 0} is valid
// {0, 4} to {0, 0} is valid
// {3, 0} to {0, 4} is valid

pointsValidation([2, 1, 1, 1]);
// Output:
// {2, 1} to {0, 0} is invalid
// {1, 1} to {0, 0} is invalid
// {2, 1} to {1, 1} is valid