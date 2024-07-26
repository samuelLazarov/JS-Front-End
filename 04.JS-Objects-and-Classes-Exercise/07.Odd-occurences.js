function oddOccurences(sentence) {
    const occurrences = sentence.split(" ").reduce((acc, curr) => {
        const key = curr.toLowerCase();
        if (!acc.hasOwnProperty(key)) {
            acc[key] = 0;
        }

        acc[key] += 1;

        return acc;
    }, {});

    console.log(
        Object.keys(occurrences)
        .filter((key) => occurrences[key] % 2 !== 0)
        .join(" ")
    );
}

oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurences('Cake IS SWEET is Soft CAKE sweet Food');