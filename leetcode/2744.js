var maximumNumberOfStringPairs = function(words) {
    let count = 0
    for(let i =0 ; i < words.length ; i++){
        let currentWord = words[i]
        let pair = currentWord.split('').reverse().join('')
        console.log(pair)
        for(let j = i+1 ; j < words.length ; j++){
            if(words[j] == pair){
                count++
            }
        }
    }
    return count
};  



console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]))