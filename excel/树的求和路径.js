var pathSum = function(root, sum) {
    if(!root) return []
    const result = { current: 0 }
    helpers(root, sum, [], result)
    return result.current
};

function helpers(root, sum, path, result) {
    if(!root) return
    path.push(root.val)

    let index = path.length - 1
    let total = 0
    while(index >= 0) {
        total += path[index]
        if(total === sum) {
            result.current++
        }
        index--
    }

    helpers(root.left, sum, path, result)
    helpers(root.right, sum, path, result)

    path.pop()
}