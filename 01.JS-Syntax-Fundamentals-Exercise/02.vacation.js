// You are given a group of people, the type of the group, and the day of the week they are going to stay.
// Based on that information calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person. 
// The output should look like that: `Total price: {price}`. The price should be formatted to the second decimal point.

function calculateTotalPrice(numberOfPeople, groupType,  dayOfWeek) {
    
    const prices = {
        'Friday': { 'Students': 8.45, 'Business': 10.90, 'Regular': 15.00 },
        'Saturday': { 'Students': 9.80, 'Business': 15.60, 'Regular': 20.00 },
        'Sunday': { 'Students': 10.46, 'Business': 16.00, 'Regular': 22.50 }
    };

    let pricePerPerson = prices[dayOfWeek][groupType];
    let totalPrice = pricePerPerson * numberOfPeople;

    if (groupType === 'Students' && numberOfPeople >= 30) {
        totalPrice *= 0.85; // 15% discount
    } else if (groupType === 'Business' && numberOfPeople >= 100) {
        totalPrice -= pricePerPerson * 10; // 10 people stay for free
    } else if (groupType === 'Regular' && numberOfPeople >= 10 && numberOfPeople <= 20) {
        totalPrice *= 0.95; // 5% discount
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}


calculateTotalPrice(40, 'Regular', 'Saturday');