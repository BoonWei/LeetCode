var maxSubArray = function(nums) {
    let n = nums.length
    var res = nums[0]
    for(let i = 1; i < n; i++){
        nums[i] += Math.max(0, nums[i-1])
        res = Math.max(res, nums[i])
    }
    return res
};

var n = [1,-2,3,10,-4,7,2,-5]
var r = maxSubArray(n)
console.log(r)