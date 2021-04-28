// 给定一个二叉树，确定它是否是一个完全二叉树。

function isCompleteTree(root) {
    const queue = [root]
    let reachEnd = false
    while(queue.length) {
        const size = queue.length
        for(let i = 0; i < size; i++) {
            const node = queue.shift()

            if(reachEnd && node !== null) return false

            if(node === null) {
                reachEnd = true
                continue
            }

            queue.push(node.left)
            queue.push(node.right)
        }
    }
    return true
}
