function findWordsStartingWithHashtag(text) {
    const regex = /#([a-zA-z]+)/g;
    const specialWords = text.matchAll(regex);

    for (const specialWord of specialWords) {
        console.log(specialWord[1]);
    }
}

findWordsStartingWithHashtag('Nowadays evertone uses # to tag a #special word in #socialMedia');

function modernTimes (inputString) {
    const regex = /^#[A-Za-z]+$/gm;
    inputString.split(/\s+/g).forEach((word) => {
        const result = regex.exec(word.trim());
        if (result?.length > 0) {
            [match] = result;
            console.log(match.substring(1));
        }
    });

}

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');