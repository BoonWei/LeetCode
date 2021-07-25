var missingNumber = function(nums) {
    var i = 0, j = nums.length-1
    while(i <= j){
        var m = Math.floor((i + j) / 2)
        if(nums[m] === m){
            i = m + 1
        }else{
            j = m - 1
        }
    }
    return i
}

var nums = [0]
var r = missingNumber(nums)
console.log(r)
