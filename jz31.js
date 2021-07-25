var validateStackSequences = function(pushed, popped) {
    var stack = [], i = 0
    for(var num of pushed){
        stack.push(num)
        while(stack.length && stack[stack.length-1] == popped[i]){
            stack.pop()
            i++
        }
    }
    return stack.length == 0
};

var pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
var r = validateStackSequences(pushed, popped)
console.log(r)
