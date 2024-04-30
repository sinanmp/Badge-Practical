var canBeTypedWords = function(text, brokenLetters) {
    let count = 0
    const words = text.split(' ')
    for(let i = 0 ; i < brokenLetters.length ; i++){
        for(let j = 0 ; j < words.length ; j++){
            if(words[j].includes(brokenLetters[i])){
                count++
                console.log('count')
                if(words.legnth == count){
                    return 0
                }
            }
        }
    }
    return words.length - count
};


console.log(canBeTypedWords('jwssg','cyvxmtjohsbpfqaur'))