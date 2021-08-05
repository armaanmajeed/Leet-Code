// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Input: numRows = 1
// Output: [[1]]

var generate = function(numRows) {
    var data = [];
    if(numRows == 0) { 
        return data
    }
    for (var i = 0; i < numRows; i++) {
        data[i] = [];
        data[i][0] = 1;
        for (var j = 1; j < i; j++) {
            data[i][j] = data[i-1][j-1] + data[i-1][j]
        }
        data[i][i] = 1;
    }
    return data;
};