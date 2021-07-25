var FirstNotRepeatingChar = function(str){
    var cnt = new Map()
    var n = str.length
    for(let i = 0; i < n; i++){
        var item = str[i]
        if (cnt.has(item)){
            cnt.set(item, cnt.get(item)+1)
        }else{
            cnt.set(item, 1)
        }
    }
    for(let i = 0; i < n; i++){
        if(cnt.get(str[i]) == 1){
            return i
        }
    }
    return -1
}    
var s = "google"
var res = FirstNotRepeatingChar(s)
console.log(res)