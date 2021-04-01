function TreeNode(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
}

const root = new TreeNode(
    8,
    new TreeNode(
        6,
        new TreeNode(
            5,
            null,
            null
        ),
        null
    ),
    new TreeNode(
        10,
        null,
        null
    )
)

function mirrorTree(root) {
    if(root === null) return null

    // 求左子树的镜像
    mirrorTree(root.left)
    // 求右子树的镜像
    mirrorTree(root.right)
    // 交换左右子树
    const temp = root.left
    root.left = root.right
    root.right = temp
    return root
}

console.log(mirrorTree(root))