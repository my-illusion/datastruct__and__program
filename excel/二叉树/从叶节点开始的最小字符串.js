function getChar(num) {
    return String.fromCharCode(97 + num)
}

function smallestFromLeaf(root) {
    if(!root) return ''
    const result = {
        current: null
    }
    dfs(root, getChar(root.val), result)
    return result.current
}

function dfs(root, curString = '', result) {
    if(!root) return

    if(!root.left && !root.right) {
        // 已经到达叶子结点
        if(result.current !== null && curString < result.current) {
            result.current = curString
        }
        return
    }

    if(root.left) {
        dfs(root.left, curString + getChar(root.left.val), result)
    }
    if(root.right) {
        dfs(root.right, curString + getChar(root.right.val), result)
    }
}