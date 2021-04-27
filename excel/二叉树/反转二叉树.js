function invertTree(root) {
    if(!root) return root

    root.left = invertTree(root.right)
    root.right = invertTree(root.left)

    return root
}