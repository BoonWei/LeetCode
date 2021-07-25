function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

var buildTree = function(preorder, inorder) {
    if(preorder.length === 0){
        return null
    }
    const cur = new TreeNode(preorder[0])
    //indexOf 记录中序序列中 前序首元素的位置
    const index = inorder.indexOf(preorder[0])
    //切割前序1到index 中序0到index-1
    cur.left = buildTree(preorder.slice(1, index+1), inorder.slice(0, index))
    //切割前序 剩余部分到index 中序剩余部分到index
    cur.right = buildTree(preorder.slice(index+1), inorder.slice(index+1))
    return cur
};

var pre = [1,2,3,4,5,6,7]
var vin = [3,2,4,1,6,5,7]
var res = buildTree(pre, vin)
console.log(res)
