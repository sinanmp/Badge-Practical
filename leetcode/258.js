var addDigits = function(num) {
    if(num <=9){
        return num
    }
    let string = num.toString()
    let result =9
    while(result <=9){
        result = 0
        for(let i = 0 ; i<string.length ; i++){
        result += Number(string[i])
        console.log(string[i])
        }
        if(result <=9){
            return result
        }else{
            string = result.toString()
            result = 0
        }
    }
};

console.log(addDigits(38))