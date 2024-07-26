function storeHeroes(commands) {
    commands
        .map((heroData) => {
            const [name, level, items] = heroData.split(" / ");
            return {
                name,
                level: Number(level),
                items,
            };
        })
        .sort((a, b) => a.level - b.level)
        .forEach((hero) => {
            console.log(`Hero: ${hero.name}`);
            console.log(`level => ${hero.level}`);
            console.log(`items => ${hero.items}`);
        });
}

storeHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )