// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Input: rowIndex = 3
// Output: [1,3,3,1]

// Input: rowIndex = 0
// Output: [1]

// Input: rowIndex = 1
// Output: [1,1]

var getRow = function(rowIndex) {
    var data = [];
    if(rowIndex == 0) { 
        return [1];
    }
    for (var i = 0; i <= rowIndex; i++) {
        data[i] = [];
        data[i][0] = 1;
        for (var j = 1; j < i; j++) {
            data[i][j] = data[i-1][j-1] + data[i-1][j]
        }
        data[i][i] = 1;
    }
    return data[rowIndex]
};