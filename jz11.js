var minArray = function(numbers) {
    //numbers.sort((a, b) => a- b)
    //return numbers[0]
    var low = 0, high = numbers.length-1
    while(low < high){
        let mid = low + Math.floor((high - low) / 2)
        if(numbers[mid] < numbers[high]){
            high = mid
        }else if(numbers[mid] > numbers[high]){
            low = mid + 1
        }else{
            high = high - 1
        }
    }
    return numbers[low]
};

var num = [3, 4, 5 , 1, 2]
var r = minArray(num)
console.log(r)
