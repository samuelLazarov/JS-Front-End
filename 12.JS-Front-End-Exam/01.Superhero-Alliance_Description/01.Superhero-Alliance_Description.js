function superheroAlliance(input) {
    const n = parseInt(input[0]);
    const superheroes = {};

    // Initialize superheroes
    for (let i = 1; i <= n; i++) {
        let [name, superpowers, energy] = input[i].split("-");
        superpowers = superpowers.split(",");
        energy = parseInt(energy);
        superheroes[name] = {
            superpowers: superpowers,
            energy: energy
        };
    }

    // Process commands
    let index = n + 1;
    while (input[index] !== "Evil Defeated!") {
        const [command, name, detail, value] = input[index].split(" * ");
        
        switch (command) {
            case "Use Power":
                const energyRequired = parseInt(value);
                if (superheroes[name].superpowers.includes(detail) && superheroes[name].energy >= energyRequired) {
                    superheroes[name].energy -= energyRequired;
                    console.log(`${name} has used ${detail} and now has ${superheroes[name].energy} energy!`);
                } else {
                    console.log(`${name} is unable to use ${detail} or lacks energy!`);
                }
                break;
                
            case "Train":
                const trainingEnergy = parseInt(detail);
                const energyBefore = superheroes[name].energy;
                if (energyBefore < 100) {
                    superheroes[name].energy = Math.min(100, energyBefore + trainingEnergy);
                    const energyGained = superheroes[name].energy - energyBefore;
                    console.log(`${name} has trained and gained ${energyGained} energy!`);
                } else {
                    console.log(`${name} is already at full energy!`);
                }
                break;
                
            case "Learn":
                if (superheroes[name].superpowers.includes(detail)) {
                    console.log(`${name} already knows ${detail}.`);
                } else {
                    superheroes[name].superpowers.push(detail);
                    console.log(`${name} has learned ${detail}!`);
                }
                break;
        }

        index++;
    }

    // Print final superhero states
    for (const hero in superheroes) {
        console.log(`Superhero: ${hero}`);
        console.log(` - Superpowers: ${superheroes[hero].superpowers.join(", ")}`);
        console.log(` - Energy: ${superheroes[hero].energy}`);
    }
}

// Example usage:
superheroAlliance([
    "3",
    "Iron Man-Repulsor Beams,Flight-80",
    "Thor-Lightning Strike,Hammer Throw-10",
    "Hulk-Super Strength-60",
    "Use Power * Iron Man * Flight * 30",
    "Train * Thor * 20",
    "Train * Hulk * 50",
    "Learn * Hulk * Thunderclap",
    "Use Power * Hulk * Thunderclap * 70",
    "Evil Defeated!"
]);