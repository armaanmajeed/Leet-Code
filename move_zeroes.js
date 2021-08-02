// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Input: nums = [0]
// Output: [0]

// Solution 1
var moveZeroes = function(nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[k++] = nums[i];
        }
    }
    for (let i = k; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};