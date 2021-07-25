var LeftRotateString = function (str, n){
    var l = str.length
    if(str == null || l == 0){
        return ""
    }
    var s1 = str.slice(0, n)
    var s2 = str.slice(n, l)
    var res = s2 + s1
    return res
}

var str = ""
var n = 3
var r = LeftRotateString(str, n)
console.log(r)
