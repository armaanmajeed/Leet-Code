// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Input: digits = [1,2,3]
// Output: [1,2,4]

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]

// Input: digits = [0]
// Output: [1]

var plusOne = function(digits) {
    let str = "";
    for (let i = 0; i < digits.length; i++) {
        str = str + digits[i];
    }
    let num = BigInt(str);
    num++;
    str = num.toString();
    for (let i = 0; i < str.length; i++) {
        digits[i] = parseInt(str[i]);
    }
    return digits;
};