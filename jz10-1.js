var fib = function(n) {
    var n0 = 0, n1 = 1
    var sum
    for(var i = 0; i < n; i++){
        sum = (n0 + n1)% 1000000007
        n0 = n1
        n1 = sum
    }
    return n0
};

var n = 4
var res = fib(n)
console.log(res)