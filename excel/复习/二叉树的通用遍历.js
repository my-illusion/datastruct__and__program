function preorderTraversal(root) {
    const stack = [ root ]
    const result = []
    while(stack.length) {
        const node = stack.pop()
        if(node !== null){
            
            stack.push(node)
            stack.push(null)

            if(node.right) stack.push(node.right)

            if(node.left) stack.push(node.left)

        }else{
            const node = stack.pop()
            result.push(node.val)
        }
    }
    return result
}