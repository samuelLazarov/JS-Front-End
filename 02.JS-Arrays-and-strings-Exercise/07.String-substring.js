function stringSubstring(word, text) {
    text = text.toLowerCase().split(' ');

    if(text.includes(word)){
        console.log(word);
    } else {
        console.log(`${word} not found!`)
    }
}

function stringSubstringVariant(specialWord, text) {
    const match = text.split(" ").find((x) => x.toLowerCase() === specialWord.toLowerCase());
    console.log(match ? specialWord : `${specialWord} not found!`);
}

function stringSubstringVariant2(specialWord, text){
    const regex = new RegExp(`\\b${specialWord}\\b`, "i");
    const result = text.match(regex);
    if (result != null){
        console.log(specialWord);
    } else {
        console.log(`${specialWord} not found!`)
    }
}

stringSubstringVariant2('javascript',
    'JavaScript is the best programming language'
    );

stringSubstringVariant2('python',
    'JavaScript is the best programming language'
    );