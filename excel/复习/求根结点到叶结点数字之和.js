function sumNumbers(root) {
    const sum = {
        current: 0
    }
    helpers(root, 0, sum)
    return sum.current
}

function helpers(root, curSum, sum) {
    if(!root){
        // sum.current += curSum
        return
    }

    if(!root.left && !root.right) {
        // 到达叶子结点
        sum.current += (curSum * 10 + root.val)
        return
    }

    helpers(root.left, curSum * 10 + root.val, sum)
    helpers(root.right, curSum * 10 + root.val, sum)
}