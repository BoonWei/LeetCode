var getLeastNumbers = function(arr, k) {
    arr.sort((a, b) => a - b)
    return arr.slice(0, k)
};

var arr = [0, 1, 2, 1]
var k = 2
var r = getLeastNumbers(arr, k)
console.log(r)
