function catalogue(products) {
    let productCatalogue = {};

    // Parse the products and store them in an object
    for (let productInfo of products) {
        let [name, price] = productInfo.split(' : ');
        price = Number(price);

        let initial = name[0];
        if (!productCatalogue[initial]) {
            productCatalogue[initial] = [];
        }
        productCatalogue[initial].push({ name, price });
    }

    // Sort the keys alphabetically
    let sortedInitials = Object.keys(productCatalogue).sort();

    // Print the catalogue
    for (let initial of sortedInitials) {
        console.log(initial);
        // Sort the products by name alphabetically
        productCatalogue[initial].sort((a, b) => a.name.localeCompare(b.name));
        for (let product of productCatalogue[initial]) {
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}

// Example usage:
let products1 = [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
];
catalogue(products1);

let products2 = [
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
];
catalogue(products2);