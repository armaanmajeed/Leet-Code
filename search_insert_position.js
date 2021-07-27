// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Input: nums = [1,3,5,6], target = 0
// Output: 0

// Input: nums = [1], target = 0
// Output: 0

var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i;
        } else if (nums[i] < target && nums[i+1] > target) {
            return i+1;
        } else if (nums[i] < target && i == nums.length-1) {
            return i+1;
        } else if (target == 0) {
            return 0;
        } else if (nums[i] > target) {
            return 0;
        }
    }
};