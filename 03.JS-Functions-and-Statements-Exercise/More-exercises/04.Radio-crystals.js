function processCrystals(input) {
    const targetThickness = input[0];
    
    function transportAndWash(crystalThickness) {
        console.log('Transporting and washing');
        return Math.floor(crystalThickness);
    }

    function processChunk(crystalThickness, targetThickness) {
        console.log(`Processing chunk ${crystalThickness} microns`);
        
        let cut = (crystalThickness) => crystalThickness / 4;
        let lap = (crystalThickness) => crystalThickness * 0.8;
        let grind = (crystalThickness) => crystalThickness - 20;
        let etch = (crystalThickness) => crystalThickness - 2;
        let xray = (crystalThickness) => crystalThickness + 1;
        
        let operations = {
            cut: { operation: cut, count: 0 },
            lap: { operation: lap, count: 0 },
            grind: { operation: grind, count: 0 },
            etch: { operation: etch, count: 0 },
            xray: { operation: xray, count: 0 }
        };
        
        // Cut operation
        while (crystalThickness / 4 >= targetThickness) {
            crystalThickness = operations.cut.operation(crystalThickness);
            operations.cut.count++;
        }
        if (operations.cut.count > 0) {
            console.log(`Cut x${operations.cut.count}`);
            crystalThickness = transportAndWash(crystalThickness);
        }
        
        // Lap operation
        while (crystalThickness * 0.8 >= targetThickness) {
            crystalThickness = operations.lap.operation(crystalThickness);
            operations.lap.count++;
        }
        if (operations.lap.count > 0) {
            console.log(`Lap x${operations.lap.count}`);
            crystalThickness = transportAndWash(crystalThickness);
        }
        
        // Grind operation
        while (crystalThickness - 20 >= targetThickness) {
            crystalThickness = operations.grind.operation(crystalThickness);
            operations.grind.count++;
        }
        if (operations.grind.count > 0) {
            console.log(`Grind x${operations.grind.count}`);
            crystalThickness = transportAndWash(crystalThickness);
        }
        
        // Etch operation
        while (crystalThickness - 2 >= targetThickness - 1) {
            crystalThickness = operations.etch.operation(crystalThickness);
            operations.etch.count++;
        }
        if (operations.etch.count > 0) {
            console.log(`Etch x${operations.etch.count}`);
            crystalThickness = transportAndWash(crystalThickness);
        }
        
        // X-ray operation
        if (crystalThickness < targetThickness) {
            crystalThickness = operations.xray.operation(crystalThickness);
            operations.xray.count++;
            console.log(`X-ray x${operations.xray.count}`);
        }
        
        console.log(`Finished crystal ${crystalThickness} microns`);
    }
    
    for (let i = 1; i < input.length; i++) {
        processChunk(input[i], targetThickness);
    }
}

// Test cases
processCrystals([1375, 50000]);
// Output:
// Processing chunk 50000 microns
// Cut x2
// Transporting and washing
// Lap x3
// Transporting and washing
// Grind x11
// Transporting and washing
// Etch x3
// Transporting and washing
// X-ray x1
// Finished crystal 1375 microns

processCrystals([1000, 4000, 8100]);
// Output:
// Processing chunk 4000 microns
// Cut x1
// Transporting and washing
// Finished crystal 1000 microns
// Processing chunk 8100 microns
// Cut x1
// Transporting and washing
// Lap x3
// Transporting and washing
// Grind x1
// Transporting and washing
// Etch x8
// Transporting and washing
// Finished crystal 1000 microns