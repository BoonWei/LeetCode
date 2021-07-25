var findContinuousSequence = function(target) {
    var i = 1, j = 2, s = 3
    var res = []
    while(i < j){
        if(s == target){
            let tmp = []
            for(let k = i; k <= j; k++){
                tmp.push(k)
            }
            res.push(tmp)
        }
        if(s >= target){
            s -= i
            i++
        }else{
            j++
            s += j
        }
    }
    return res
};

var t = 9
var r = findContinuousSequence(t)
console.log(r)
