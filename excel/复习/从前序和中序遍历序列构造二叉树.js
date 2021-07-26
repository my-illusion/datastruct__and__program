/**
 * 先序遍历的 第一个结点为根结点 中序遍历的根结点左侧为左子树 右侧为右子树
 * @param {*} preorder 
 * @param {*} inorder 
 */
function buildTree(preorder, inorder) {
    const index = inorder.indexOf(preorder[0])

    const leftInorder = inorder.slice(0, index)
    const rightInorder = inorder.slice(index + 1)

    // 先序遍历第一个结点的后 leftInorder.length 个结点为左子树的先序遍历
    // x - 1 + 1 = 
    const leftPreorder = preorder.slice(1, leftInorder.length + 1)
    const rightPreorder = preorder.slice(leftInorder.length + 1)

    const node =  new TreeNode(preorder[0])

    node.left = buildTree(leftPreorder, leftInorder)
    node.right = buildTree(rightPreorder, rightInorder)

    return node
}