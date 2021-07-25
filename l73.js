var setZeroes = function(matrix) {
    const m = matrix.length, n = matrix[0].length
    const flagCol0 = false, flagRow0 = false
    for(let i = 0; i < m; i++){
        if(matrix[i][0] === 0){
            flagCol0 = true
        }
    }
    for(let i = 0; i < n; i++){
        if(matrix[0][i] === 0){
            flagRow0 = true
        }
    }
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = matrix[0][j] = 0
            }
        }
    }
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0
            }
        }
    }
    if(flagCol0){
        for(let i = 0; i < m; i++){
            matrix[i][0] = 0
        }
    }
    if(flagRow0){
        for(let i = 0; i < n; i++){
            matrix[0][i] = 0
        }
    }
};

var matrix = [[1,1,1],[1,0,1],[1,1,1]]
var res = setZeroes(matrix)
console.log(res)