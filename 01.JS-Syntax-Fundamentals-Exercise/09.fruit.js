//Write a function that calculates how much money you need to buy fruit. You will receive a string for the type of fruit you want to buy, a number for weight in grams, and another number for the price per kilogram. 
// Print the following text on the console:  
// `I need ${money} to buy {weight} kilograms {fruit}.`
// Print the weight and the money rounded to two decimal places.

function calclateMoneyForFruits(fruit, grams, pricePerKg){
    let kilograms = grams / 1000;

    let price = pricePerKg * kilograms;

    kilograms = kilograms.toFixed(2);

    price = price.toFixed(2);

    console.log(`I need $${price} to buy ${kilograms} kilograms ${fruit}.`);
}

calclateMoneyForFruits('orange', 2500, 1.80);