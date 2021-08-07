// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Input: nums = [3,2,3]
// Output: 3

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    let halfIndex = nums.length/2;
    let maxElement = 0;
    let k = 0;
    let element = nums[k];
    while (halfIndex > maxElement) {
        element = nums[k];
        for (let i = 0; i < nums.length; i++) {
            if (element === nums[i]) {
                maxElement++;
            }
        }
        if (halfIndex > maxElement) {
            k++;
            maxElement = 0;
        }
    }
    return element;
};