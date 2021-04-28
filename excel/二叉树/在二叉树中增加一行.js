function addOneRow(root, val, depth) {
    // 二叉树的层次遍历
    if(depth === 1) {
        const newNode = new TreeNode(val)
        newNode.left = root
        return newNode
    }

    const queue = [root]
    let curDep = 1
    while(queue.length) {
        const size = queue.length
        // 如果 curDep === depth - 1 那么就要开始插入新的结点
        if(curDep === depth - 1) {
            for(let i = 0; i < size; i++) {
                const node  = queue.unshift()
                // 创建左右子树
                const leftNode = new TreeNode(val, node.left)
                const rightNode = new TreeNode(val,  null, node.right)
                
                node.left = leftNode
                node.right = rightNode
            }
            break
        }else{
            for(let i = 0; i < size; i++) {
                const node  = queue.unshift()
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
        }
    }
    return root
}