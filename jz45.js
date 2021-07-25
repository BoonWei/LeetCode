function IsContinuous(numbers)
{
    if(numbers == ""){
        return false
    }
    var res = new Set()
    var ma = 0, mi = 14
    for(let n of numbers){
        if(n == 0){
            continue
        }
        if(res.has(n)){
            return false
        }
        res.add(n)
        ma = Math.max(ma, n)
        mi = Math.min(mi, n)
    }
    return ma - mi < 5
}

var n = []
var r = IsContinuous(n)
console.log(r)
