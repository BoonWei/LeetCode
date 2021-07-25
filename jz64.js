var sumNums = function(n) {
    var x = n > 1 && (n += sumNums(n-1)) > 0
    return n
};

var n = 3
var r = sumNums(n)
console.log(r)
