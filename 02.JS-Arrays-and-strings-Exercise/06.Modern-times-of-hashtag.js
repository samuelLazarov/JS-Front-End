function findWordsStartingWithHashtag(text) {
    const pattern = /#([a-zA-z]+)/g;
    const specialWords = text.matchAll(pattern);

    for (const specialWord of specialWords) {
        console.log(specialWord[1]);
    }
}

findWordsStartingWithHashtag('Nowadays evertone uses # to tag a #special word in #socialMedia');