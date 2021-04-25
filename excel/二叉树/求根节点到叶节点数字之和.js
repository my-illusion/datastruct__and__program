function sumNumbers(root) {
    const result = {
        current: 0
    }
    helpers(root, 0, result)
    return result.current
}

function helpers(root, curSum = 0, result) {
    if(!root) return

    if(!root.left && !root.right) {
        // 到达根节点
        const sum = curSum * 10 + root.val
        result.current += sum
        return
    }

    helpers(root.left, curSum * 10 + root.val, result)
    helpers(root.right, curSum * 10 + root.val, result)
}