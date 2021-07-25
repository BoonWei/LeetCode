var majorityElement = function(nums) {
    var n = nums.length
    const m = new Map()
    for(var i = 0; i < n; i++){
        if(!m.has(nums[i])){
            m.set(nums[i], 1)
        }else{
            m.set(nums[i], m.get(nums[i])+1)
        }
    }
    var maxvalue = -1, maxkey = 0
    for(let [key, value] of m){
        if(value > maxvalue){
            maxvalue = value
            maxkey = key
        }
    }
    return maxkey
};

var nums = [1, 2, 3, 2, 2, 2, 5, 4, 2]
var r = majorityElement(nums)
console.log(r)
