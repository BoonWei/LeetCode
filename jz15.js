var hammingWeight = function(n) {
    var res = 0
    for(var i = 0; i < 32; i++){
        if((n & (1 << i)) !== 0){
            res++
        }
    }
    return res
};

var n = 11
var r = hammingWeight(n)
console.log(r)