function kthSmallest(root, k) {
    const stack = [root]
    while(stack.length) {
        const node = stack.pop()
        if(node !== null) {
            if(node.left) stack.push(node.left)

            stack.push(node)
            stack.push(null)

            if(node.right) stack.push(node.right)
        }else{
            k--
            if(k === 0)
            const item = node.pop()
            return item.val
        }
    }
}
