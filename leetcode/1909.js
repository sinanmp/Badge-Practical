var canBeIncreasing = function(nums) {
    let dup = nums
    let result 
    for(let i = 0 ; i < nums.length ; i++){
        let removedNum = dup.splice(i,1)
        result = true
        for(let j = 0 ; j < dup.length ; j++){
            if(dup[j]>=dup[j+1]){
                console.log('working',dup)
                result = false
                break
            }   
        }
        if(result == true){
            return result
        }
        dup.splice(i, 0, removedNum[0]);
    }
    return result
};

console.log(canBeIncreasing([100,21,3]))