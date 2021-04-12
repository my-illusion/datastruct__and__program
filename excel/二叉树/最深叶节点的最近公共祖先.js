function lcaDeepestLeaves(root) {
    return helpers(root)[0]
}

function helpers(root) {
    if(!root) return [null, 0]
    const [left, leftLevel] = helpers(root.left)
    const [right, rightLevel] = helpers(root.right)

    if(leftLevel > rightLevel) {
        return [left, leftLevel + 1]
    }else if(leftLevel < rightLevel) {
        return [right, rightLevel + 1]
    }else{
        return [root, leftLevel + 1]
    }
}