var findMaxK = function(nums) {
    let largest;

    let findLargest = (lg = undefined) => {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i + 1] && nums[i + 1] > nums[i] && nums[i + 1] !== lg) {
                largest = nums[i + 1];
            }
        }
        console.log(largest);
        let val = checkNegative();
        return val;
    };

    let checkNegative = () => {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === -largest) {
                return largest;
            }
        }
        return findLargest(largest);
    };

    return findLargest();
};

console.log(findMaxK([-1, 10, 6, 7, -7, 1]));
