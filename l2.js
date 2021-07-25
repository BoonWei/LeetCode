function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    var l3 = new ListNode(0)
    var p = l3
    var summ = 0
    while(l1 != null || l2.next != null){
        let x = l1 != null ? l1.val : 0
        let y = l2 != null ? l2.val : 0
        let tmp = x + y + summ
        summ = tmp >= 10 ? 1 : 0
        l3.next = new ListNode(tmp % 10)
        l3 = l3.next
        if(l1 != null){
            l1 = l1.next
        }
        if(l2 != null){
            l2 = l2.next
        }
    }
    return p.next
}

var l1 = [2,4,3]
var l2 = [5,6,4]
var res = addTwoNumbers(l1, l2)
console.log(res)
