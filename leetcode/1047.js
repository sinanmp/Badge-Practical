var removeDuplicates = function(s) {
    for(let i = 0 ; i<s.length ; i++){
        for(let j = 1 ; j<s.length ; j++){
            if(s[i]==s[j]){
               console.log(s)
               s= removeLetter(s,i)
               console.log(s)
               s= removeLetter(s,j-1)
               break
            }
        }
    }
    return console.log(s)
};

function removeLetter(str, index) {
    return str.slice(0, index) + str.substring(index + 1);
}


removeDuplicates("azxxzy")