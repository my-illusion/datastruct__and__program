function preorderTraversal(root) {
    const stack = [ root ]
    const result = []
    while(stack.length) {
        const node = stack.pop()
        if(node !== null){
            
            stack.push(node)
            stack.push(null)

            if(node.left) stack.push(node.left)
            
            if(node.right) stack.push(node.right)

        }else{
            const node = stack.pop()
            result.push(node.val)
        }
    }
    return result
}