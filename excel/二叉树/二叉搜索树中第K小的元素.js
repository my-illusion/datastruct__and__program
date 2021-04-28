function kthSmallest(root, k) {
    const stack = [root]
    while(stack.length) {
        const node = stack.shift()
        if(node !== null) {
            if(node.left) stack.push(node.left)

            stack.push(null)

            if(node.right) stack.push(node.right)
        }else{
            k--
            if(k === 0)
            return node.val
        }
    }
}
