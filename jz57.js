var twoSum = function(nums, target) {
    var n = nums.length
    var i = 0, j = n - 1, s = 0
    while(i < j){
        s = nums[i] + nums[j]
        if(s > target){
            j--
        }else if(s < target){
            i++
        }else{
            return [nums[i], nums[j]]
        }
    }
}

var nums = [2,7,11,15], target = 9
var res = twoSum(nums, target)
console.log(res)

