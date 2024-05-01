var removeOuterParentheses = function(s) {
    for(let i = 0 ; i < s.length ; i++){
        if(s[i]=='(' && s[i+1] !=')'){
            s = s.slice(0,i) + s.slice(i+1)
        }else if(s[i]==')' && s[i+1]!='('){
            s = s.slice(0,i) + s.slice(i+1)
        }
    }
    return s
};

console.log(removeOuterParentheses('(()())(())'))
