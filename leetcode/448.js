var findDisappearedNumbers = function(nums) {
    let numbers = [];
    
    for(let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        console.log(index)
        if(nums[index] > 0) {
            nums[index] = -nums[index];
        }
        console.log(nums)
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) {
            numbers.push(i + 1);
        }
    }
    
    return numbers;
};



console.log(findDisappearedNumbers([4,32,2,7,87,2,3,1]))