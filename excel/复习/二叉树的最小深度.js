function minDepth(root) {
    if(!root) return 0
    const stack = [root]

    let result = -1
    
    while(stack.length) {
        const len = stack.length
        result++

        for(let i = 0; i < len; i++) {
            const node = stack.shift()

            if(!node.left && !node.right) {
                return result
            }

            if(node.left) stack.push(node.left)
            if(node.right) stack.push(node.right)
        }
    }
}