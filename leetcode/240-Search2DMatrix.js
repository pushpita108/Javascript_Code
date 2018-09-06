/**
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties: 
 * Integers in each row are sorted in ascending from left to right. 
 * Integers in each column are sorted in ascending from top to bottom.
 * Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//O(n)
function searchMatrix(matrix, target) {
    let row = matrix.length-1;
    let col = 0;
    while(row >= 0 && col < matrix[0].length) {
        if(matrix[row][col] > target) {
            row--;
        } else if(matrix[row][col] < target) {
            col++;
        } else {
            return true;
        }
    }
    return false;
}

arr = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ];

target1 = 5;
target2 = 20;
console.log(searchMatrix(arr, target1));
console.log(searchMatrix(arr, target2));