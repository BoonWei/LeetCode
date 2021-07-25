var singleNumbers = function(nums) {
    /*
    var res = new Map()
    for(var i = 0; i < nums.length; i++){
        if(res.has(nums[i])){
            res.set(nums[i], 1 + res.get(nums[i]))
        }else{
            res.set(nums[i], 1)
        }
    }
    var ans = []
    for(var [key, val] of res){
        if(val == 1){
            ans.push(key)
        }
    }
    return ans*/
    var x= 0, y = 0, n = 0, m = 1
    for(var num of nums){
        n ^= num
    }
    while((n & m) == 0){
        m = m << 1
    }
    for(var num of nums){
        if(num & m){
            x = x ^ num
        }else{
            y = y ^ num
        }
    }
    return [x, y]
};

var nums = [1,2,10,4,1,4,3,3]
var r = singleNumbers(nums)
console.log(r)
