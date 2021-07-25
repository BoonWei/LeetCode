var lastRemaining = function(n, m) {
    var x = 0
    for(let i = 2; i <= n; i++){
        x = (x + m) % i
    }
    return x
};

var n = 5, m = 3
var r = lastRemaining(n, m)
console.log(r)