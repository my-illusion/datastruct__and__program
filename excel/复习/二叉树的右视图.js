function rightSideView(root) {
    const result = []
    const queue = [root]

    while(queue.length) {
        const len = queue.length

        for(let i = 0; i < len; i++) {

            const node = queue.shift()

            if(i === len - 1){
                result.push(node.val)
            }

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    return result
}