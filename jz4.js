/*
var findNumberIn2DArray = function(matrix, target) {
    const n = matrix.length
    const m = matrix[0].length
    if(matrix === null || n === 0 || m === 0){
        return false
    }
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(matrix[i][j] == target){
                return true
            }
        }
    }
    return false
};
*/

var findNumberIn2DArray = function(matrix, target) {
    if(matrix === null || matrix.length === 0 || matrix[0].length === 0){
        return false
    }
    const rows = matrix.length
    const cols = matrix[0].length
    var row = 0, col = cols - 1
    while(row < rows && col >= 0){
        var num = matrix[row][col]
        if(num == target){
            return true
        }else if(num > target){
            col--
        }else{
            row++
        }
    }
    return false
}

var m = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
  
var t = 5
var res = findNumberIn2DArray(m, t)
console.log(res)
