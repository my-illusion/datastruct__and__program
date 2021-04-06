function TreeNode(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
}

const root = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(3, null, null)
    ),
    new TreeNode(4, null, null)
)

function bfs(root) {
    const result = []
    const queue = [root]

    while(queue.length) {
        const size = queue.length

        for(let i = 0; i < size; i++) {
            const node = queue.shift()
            result.push(node.val)
            if( node.left ) queue.push(node.left)
            if( node.right ) queue.push(node.right)
        }
    }
    return result
}

console.log(
    bfs(root)
)