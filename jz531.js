var search = function(nums, target) {
    var i = 0, j = nums.length - 1
    while(i <= j){
        let m = Math.floor((i + j) / 2)
        if(nums[m] <= target){
            i = m + 1
        }else{
            j = m - 1
        }
    }
    var right = i
    if(j >= 0 && nums[j] != target){
        return 0
    }
    i = 0, j = nums.length - 1
    while(i <= j){
        let m = Math.floor((i + j) / 2)
        if(nums[m] < target){
            i = m + 1
        }else{
            j = m - 1
        }
    }
    var left = j
    return right - left - 1
};

var nums = [5,7,7,8,8,10]
var t = 8
var r = search(nums, t)
console.log(r)
