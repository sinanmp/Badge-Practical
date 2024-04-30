var maximumDifference = function(nums) {
    let maximum = 0
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i+1 ; j < nums.length ; j++){
            if(nums[i]<nums[j]){
                maximum = maximum < nums[j]-nums[i]? nums[j]-nums[i] :maximum
            }
        }
    }
    return maximum
};

console.log(maximumDifference([7,1,5,4]))