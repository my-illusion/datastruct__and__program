function TreeNode(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
}

/**
 *         8
 *      6     10
 *  5      7
 *9    4
 */

const root = new TreeNode(
    8,
    new TreeNode(
        6,
        new TreeNode(
            5,
            new TreeNode(
                9,
                null,
                null
            ),
            new TreeNode(
                4,
                null,
                null
            )
        ),
        new TreeNode(
            7,
            null,
            null
        )
    ),
    new TreeNode(
        10,
        null,
        null
    )
)

function printTree(root){
    if(!root) return
    const stack = [
        [root],
        []
    ]
    let current = 0
    let next = 1
    while(stack[current].length || stack[next].length) {
        const top = stack[current].pop()

        console.log(top.val)
        
        if(current === 0) {
            if(top.left) {
                stack[next].push(top.left)
            }
            if(top.right) {
                stack[next].push(top.right)
            }
        }

        if(current === 1) {
            if(top.right) {
                stack[next].push(top.right)
            }
            if(top.left) {
                stack[next].push(top.left)
            }
        }

        if(stack[current].length === 0) {
            current = 1 - current
            next = 1 - next
        }
    }
}

printTree(root)