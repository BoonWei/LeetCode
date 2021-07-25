var isNumber = (token) =>{
    return !('+' === token || '-' === token || '*' === token || '/' === token)
}

var evalRPN = function(tokens) {
    const stack =[]
    var n = tokens.length
    for(let i = 0; i < n; i++){
        const token = tokens[i]
        if(isNumber(token)){
            stack.push(parseInt(token))
        }else{
            const num2 = stack.pop()
            const num1 = stack.pop()
            var res = 0
            if(token === '+'){
                res = num1 + num2            
            }else if(token === '-'){
                res = num1 - num2
            }else if(token === '*'){
                res = num1 * num2
            }else if(token === '/'){
                res = num1 / num2 > 0 ? Math.floor(num1 / num2)
                    : Math.ceil(num1 / num2)
            }
            stack.push(res)
        }
    }
    return stack.pop()
};


var t = ["2","1","+","3","*"]
var res = evalRPN(t)
console.log(res)