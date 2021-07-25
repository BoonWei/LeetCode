var arrayPairSum = function(nums) {
    nums.sort((a, b) => a-b)
    var ans = 0
    var n = nums.length
    for(var i = 0; i < n; i+=2){
        ans += nums[i]
    }
    return ans
}

var nums = [6,2,6,5,1,2]
var res = arrayPairSum(nums)
console.log(res)
