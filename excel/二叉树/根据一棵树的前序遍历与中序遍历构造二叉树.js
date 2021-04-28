// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]

// 假设树中没有重复的元素

// 前序的第一个结点是 root 结点  中序root结点之前的是左子树 右边是右子树
// 左子树的前序遍历

function buildTree(preorder, inorder) {
    const lenPre = preorder.length

    if(!lenPre) return null

    const root = new TreeNode(preorder[0])

    const index = inorder.findIndex(i => i === preorder[0])

    const leftInorder = inorder.slice(0, index)
    const rightInorder = inorder.slice(index + 1)

    const leftPreorder = preorder.slice(1, leftInorder.length + 1)
    const rightPreorder = preorder.slice(leftInorder.length + 1)

    root.left = buildTree(leftPreorder, leftInorder)
    root.right = buildTree(rightPreorder, rightInorder)

    return root
}