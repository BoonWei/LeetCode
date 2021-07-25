var exist = function(board, word) {
    function dfs(i, j, k){
        if(i < 0 || i > board.length || j < 0 || j > board[0].length || board[i][j] != word[k]){
            return false
        }
        if(k == word.length-1){
            return true
        }
        board[i][j] = ''
        var res = dfs(i+1, j, k+1) || dfs(i, j+1, k+1) || dfs(i-1, j, k+1) || dfs(i, j-1, k+1)
        board[i][j] = word[k]
        return res
    }
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board[0].length; j++){
            if(dfs(i, j, 0)){
                return true
            }
        }
    }
    return false
};

var board = [["a","b"],["c","d"]]
var word =  "abcd"
var r = exist(board, word)
console.log(r)
