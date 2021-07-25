var reverseWords = function(s) {
    s = s.trim()
    var i = s.length -1, j = i
    var res = ""
    while(i >= 0){
        while(i >= 0 && s.charAt(i) != ' '){
            i--
        }
        res += s.substring(i+1, j+1) + ' '
        while(i >= 0 && s.charAt(i) == ' '){
            i--
        }
        j = i
    }
    res = res.trim()
    return res
};

var s = "  hello world!  "
var r = reverseWords(s)
console.log(r)