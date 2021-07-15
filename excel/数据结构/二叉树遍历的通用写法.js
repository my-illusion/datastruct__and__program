function commonTraverse(root) {
    if(!root) return []
    const stack = [root]
    const result = []

    while(stack.length) {
        const node = stack.pop()

        if(node !== null) {

            // 中
            stack.push(node)
            stack.push(null)

            // 右
            if(node.right) stack.push(node.right)

             // 左
             if(node.left) stack.push(node.left)


        }else{
            const temp = stack.pop()
            result.unshift(temp.val)
        }
    }

    return result
}

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

const result = commonTraverse(root)

console.log(result)

/**
 *   1
 *  2  4
 * 3
 */