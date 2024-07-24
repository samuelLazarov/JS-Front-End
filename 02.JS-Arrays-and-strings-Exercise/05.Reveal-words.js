function replaceWords(wordsInput, template) {
    const words = wordsInput.split(', ');
    const templateArray = template.split(' ');

    words.forEach(word => {
        for (let i=0; i<templateArray.length; i++){
            if (templateArray[i].length === word.length && templateArray[i].includes('*')) {
                templateArray[i] = word;
                break;
            }
        }

    })
    console.log(templateArray.join(' '));
}

replaceWords('great, learning', 
    'softuni is ***** place for ******** new programming languages');

function revealWords(specialWords, template) {
    let finalSentence = template;
    specialWords.split(", ").forEach((word) => {
        const searchValue = "*".repeat(word.length);
        finalSentence = finalSentence.replace(searchValue, word);
    })

    console.log(finalSentence);
}

revealWords('great, learning', 
    'softuni is ***** place for ******** new programming languages');