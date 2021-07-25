var findMaxConsecutiveOnes = function(nums) {
    var n = nums.length
    var cnt = 0
    var maxCnt = 0
    for(var i = 0; i < n; i++){
        if(nums[i] == 1){
            cnt += 1
        }else{
            maxCnt = Math.max(cnt, maxCnt)
            cnt = 0
        }
    }
    maxCnt = Math.max(maxCnt, cnt)
    return maxCnt
}

var nums = [1,1,0,1,1,1]
var res = findMaxConsecutiveOnes(nums)
console.log(res)