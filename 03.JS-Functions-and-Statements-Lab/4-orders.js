function calculateTotalPrice(product, quantity) {
    // Define product prices
    const prices = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00
    };
    
    // Check if the product is valid and exists in the prices object
    if (!prices.hasOwnProperty(product)) {
        console.log("Invalid product");
        return;
    }
    
    // Calculate the total price
    const unitPrice = prices[product];
    const totalPrice = unitPrice * quantity;
    
    // Print the result formatted to the second decimal place
    console.log(totalPrice.toFixed(2));
}

// Test cases
calculateTotalPrice("water", 5);   // Output: 5.00
calculateTotalPrice("coffee", 2);  // Output: 3.00
calculateTotalPrice("coke", 3);    // Output: 4.20
calculateTotalPrice("snacks", 4);  // Output: 8.00