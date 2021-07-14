function maxDepth(root) {
    if(!root) return 0

    if(!root.left && !root.right) return 1

    const left = maxDepth(root.left)
    const right = maxDepth(root.right)

    return (left > right ? left : right) + 1
}