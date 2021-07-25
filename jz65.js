var add = function(a, b) {
    while(b != 0){
        var c = (a & b) << 1
        var a = a ^ b
        var b = c
    }
    return a
};

var a = 1, b = 1
var r = add(a, b)
console.log(r)
