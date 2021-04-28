/**
 * 
 * @param {*} root 
 */

 var sum = -Infinity

function maxPathSum(root) {
    sum = -Infinity
    helpers(root)
    return sum
}

function helpers(root) {
    if(!root) return 0

    const left = Math.max(helpers(root.left), 0)
    const right = Math.max(helpers(root.right), 0)

    const temp = root.val + left + right
    if(temp > sum){
        sum = temp
    }
    return root.val + Math.max(left, right)
}