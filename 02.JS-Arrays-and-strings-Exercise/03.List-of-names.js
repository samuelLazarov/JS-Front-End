function sortAlphabeticallyAscending(names) {
    names
    .sort((a, b) => a.localeCompare(b))
    .forEach((name, index) => {
        console.log(`${index + 1}.${name}`);
    });
}

function listOfNames(arr) {
        arr.sort()
        .map((name, index) => {
            const pos = index + 1;
            console.log(`${pos}.${name}`);
        });
    }
    
    sortAlphabeticallyAscending(["John", "Bob", "Christina", "Ema"]);
    listOfNames(["John", "Bob", "Christina", "Ema"]);