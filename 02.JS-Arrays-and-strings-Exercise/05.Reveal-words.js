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