var maxProfit = function(prices) {
    var cost = Number.MAX_VALUE, profit = 0
    for(var price of prices){
        cost = Math.min(cost, price)
        profit = Math.max(profit, price-cost)
    }
    return profit
};

var p = [7,1,5,3,6,4]
var r = maxProfit(p)
console.log(r)
