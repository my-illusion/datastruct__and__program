function subtreeWithAllDeepest(root) {
    
}

function helpers(root) {
    if(!root) return [null, 0]

    const left = subtreeWithAllDeepest(root.left)
    const right = subtreeWithAllDeepest(root.right)

    if(left[1] > right[1]) return [left, left[1] + 1]
    if(right[1] > left[1]) return [right, right[1] + 1]

    return [root, left[1] + 1]
}