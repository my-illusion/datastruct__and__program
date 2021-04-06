function pathSum(root, sum) {
    const path = []
    const result = []
    helpers(root, sum, path, result)
}

function helpers(root, sum, path, result) {
    if(!root) return
    if(!root.left && !root.right && sum === root.val) {
        result.push(path)
        return
    }

    helpers(root.left, sum - root.val, path.concat(root.val), result)

    helpers(root.right, sum - root.val, path.concat(root.val), result)
}