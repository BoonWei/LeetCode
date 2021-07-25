var NumMatrix = function(matrix) {
    const m = matrix.length
    if(m > 0){
        const n = matrix[0].length
        this.sums = new Array(m).fill(0).map(()=>new Array(n+1).fill(0))
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                this.sums[i][j+1] = this.sums[i][j] + matrix[i][j]
            }
        }
    }
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0
    for(let i = row1; i <= row2; i++){
        sum += this.sums[i][col2+1] - this.sums[i][col1] 
    }
    return sum
};

var matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
  ]
var m = NumMatrix(matrix)
var res = m.sumRegion(2, 1, 4, 3)
console.log(res)
