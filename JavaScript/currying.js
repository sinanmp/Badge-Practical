

function a(a){
    return function b(b){
        return function c(c){
            return a+b+c
        }
    }
}


console.log(a(10)(20)(30))