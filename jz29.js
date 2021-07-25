var spiralOrder = function(matrix) {
    if(matrix.length === 0){
        return []
    }
    let l = 0, r = matrix[0].length-1, t = 0, b = matrix.length-1
    let res = []
    while(true){
        for(let i = l; i <= r; i++){
            res.push(matrix[t][i])
        }
        if(++t > b){
            break
        }
        for(let i = t; i <= b; i++){
            res.push(matrix[i][r])
        }
        if(l > --r){
            break
        }
        for(let i = r; i >= l; i--){
            res.push(matrix[b][i])
        }
        if(t > --b){
            break
        }
        for(let i = b; i >= t; i--){
            res.push(matrix[i][l])
        }
        if(++l > r){
            break
        }
    }
    return res
};

var m =  [[1,2,3],[4,5,6],[7,8,9]]
var r = spiralOrder(m)
console.log(r)
