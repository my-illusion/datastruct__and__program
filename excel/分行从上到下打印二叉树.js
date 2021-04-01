function TreeNode(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
}

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
        null
    ),
    new TreeNode(
        10,
        null,
        null
    )
)

function printTree(root) {
    if(!root) return
    const queue = [root]
    let nextLevel = 0
    let toBePrint = 1

    while(queue.length) {
        const top = queue.shift()
        console.log(top.val)

        if(top.left){
            queue.push(top.left)
            nextLevel++
        }
        if(top.right) {
            queue.push(top.right)
            nextLevel++
        }

        toBePrint--
        if(toBePrint === 0) {
            toBePrint = nextLevel
            nextLevel = 0
        }
    }
}

printTree(root)