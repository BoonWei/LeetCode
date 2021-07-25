var exchange = function(nums) {
    let n = nums.length
    let low = 0, fast = 0
    while(fast < n){
        if(nums[fast] & 1){
            [nums[low], nums[fast]] =  [nums[fast], nums[low]]
            low++
        }
        fast++
    }
    return nums
};

var nums = [1, 2, 3 ,4]
var res = exchange(nums)
console.log(res)
