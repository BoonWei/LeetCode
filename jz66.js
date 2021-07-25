var constructArr = function(a) {
    var n = a.length
    if(n == 0){
        return []
    }
    var b = []
    b[0] = 1
    var tmp = 1
    for(var i = 1; i < n; i++){
        b[i] = b[i-1] * a[i-1]
    }
    for(var i = n-2; i >= 0; i--){
        tmp *= a[i+1]
        b[i] *= tmp
    }
    return b
};

var a = [1,2,3,4,5]
var r = constructArr(a)
console.log(r)