var isSameAfterReversals = function(num) {
    let numString = num.toString()
    let beforeLength = numString.length
    let reverse = numString.split('').reverse().join('');
    numString = Number(reverse)
    let afterLength = numString.toString().length
    return beforeLength == afterLength
};


console.log(isSameAfterReversals(1800))