var findRepeatNumber = function(nums) {
    var n = nums.length
    var cns = {}
    for(let i = 0; i < n; i++){
        if(cns[nums[i]] !== undefined){
            return nums[i]
        }else{
            cns[nums[i]] = 1
        }
    }
};

var nums = [2, 3, 1, 0, 2, 5, 3]
var r = findRepeatNumber(nums)
console.log(r)