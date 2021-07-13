function zigzagLevelOrder(root) {
    if(!root) return []
    const result = []
    const queue = [root]

    let current = 1
    while(queue.length) {
        const temp = []
        const len = queue.length
        for(let i = 0; i < len; i++) {
            const node = queue.shift()
           
            if(current) {
                temp.unshift(node.val)
            }else{
                temp.push(node.val)
            }

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            
        }
        current = 1 - current
        result.push(temp)
    }
    return result
}