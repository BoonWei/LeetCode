var ParkingSystem = function(big, medium, small) {
    this.big = big
    this.medium = medium
    this.small = small
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if(carType === 1){
        if(this.big > 0){
            this.big--
            return true
        }
    }else if(carType === 2){
        if(this.medium > 0){
            this.medium--
            return true
        }
    }else if(carType === 3){
        if(this.small > 0){
            this.small--
            return true
        }
    }
    return false
};

var big = 1, medium = 1, small = 0

var obj = new ParkingSystem(big, medium, small)
var param_1 = obj.addCar(carType)
console.log(param_1)
