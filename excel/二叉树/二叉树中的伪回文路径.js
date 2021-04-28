/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 function pseudoPalindromicPaths(root) {
    const mapArr = new Array(10).fill(0)
    mapArr[root.val]++
    const result = { current: 0 }
    helpers(root, mapArr, result)
    return result.current
}

function helpers(root, mapArr, result) {
    if(!root) return
    if(!root.left && !root.right) {
        // 判断当前mapArr中奇偶数的个数

        const num = mapArr.filter(i => i % 2).length
        if(num <= 1) {
            result.current++
        }
        return
    }

    if(root.left){
        mapArr[root.left.val]++
        helpers(root.left, mapArr, result)
        mapArr[root.left.val]--
    }
    if(root.right){
        mapArr[root.right.val]++
        helpers(root.right, mapArr, result)
        mapArr[root.right.val]--
    }
}