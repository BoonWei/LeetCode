/*
var replaceSpace = function(s) {
    return s.split(' ').join("%20")
};

var replaceSpace = function(s) {
    var count = 0
    var n = s.length
    for(let i = 0; i < n; i++){
        if(s[i] === ' '){
            count++
        }
    }
    var st = new Array(n + 2 * count)
    for(let i = 0, j = 0; i < s.length; i++){
        if(s[i] != ' '){
            st[j++] = s[i]
        }else{
            st[j++] = '%'
            st[j++] = '2'
            st[j++] = '0'
        }
    }
    return st.join('')
};
*/
var replaceSpace = function(s) {
    var n = s.length
    var res = []
    for(let i = 0; i < n; i++){
        if(s[i] !== ' '){
            res += s[i]
        }else{
            res += "%20"
        }
    }
    return res
};

var s = "We are happy."
var r = replaceSpace(s)
console.log(r)