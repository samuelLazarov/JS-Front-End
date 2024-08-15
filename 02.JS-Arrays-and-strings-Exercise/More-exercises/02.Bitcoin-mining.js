function bitcoinMining(goldMined) {
    const bitcoinPrice = 11949.16;  // price of 1 bitcoin in lv.
    const goldPrice = 67.51;  // price of 1g of gold in lv.
    
    let totalMoney = 0;
    let totalBitcoins = 0;
    let dayOfFirstBitcoin = 0;
    
    for (let day = 0; day < goldMined.length; day++) {
        let gold = goldMined[day];
        
        // Every third day, 30% of the gold is stolen
        if ((day + 1) % 3 === 0) {
            gold *= 0.7;
        }
        
        // Calculate the money earned for the day
        totalMoney += gold * goldPrice;
        
        // Check if enough money to buy at least 1 bitcoin
        while (totalMoney >= bitcoinPrice) {
            totalBitcoins++;
            totalMoney -= bitcoinPrice;
            
            // Record the day of the first bitcoin purchase
            if (totalBitcoins === 1) {
                dayOfFirstBitcoin = day + 1;
            }
        }
    }
    
    // Output the results
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (totalBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

// Test cases
bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);