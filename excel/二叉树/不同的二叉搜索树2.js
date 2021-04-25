// 给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。

function generateTrees(n) {
    if(!n) return []
    return helpers(1, n)
}

function helpers(start, end) {
    if(start > end) {
        return null
    }

    const allTrees = []

    for(let i = start; i <= end; i++) {
        const leftTrees = helpers(start, i - 1)
        const rightTrees = helpers(i + 1, end)

        for(const left of leftTrees) {
            for(const right of rightTrees) {
                const treeNode = new TreeNode(i)
                treeNode.left = left
                treeNode.right = right
                allTrees.push(treeNode)
            }
        }
    }
    return allTrees
}
