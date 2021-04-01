function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const root = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(
            4,
            new TreeNode(8, null, null),
            null
        ),
        new TreeNode(
            5, null, null
        )
    ),
    new TreeNode(
        3,
        null,
        new TreeNode(7, null, null)
    )
)

var listOfDepth = function(tree) {
    if(!tree) return []

    const stack = [tree]
    const result = []
    let toDelete = 1
    let nextLevel = 0
    let pHead = null
    let tail = null

    while(stack.length){
        const node = stack.shift()
        if(!pHead) {
            const n = new ListNode(node.val)
            pHead = n
            tail = n
        }else{
            const n = new ListNode(node.val)
            tail.next = n
            tail = n
        }

        if(node.left){
            stack.push(node.left)
            nextLevel++
        }

        if(node.right) {
            stack.push(node.right)
            nextLevel++
        }

        toDelete--

        if(toDelete === 0) {
            result.push(pHead)
            pHead = null
            toDelete = nextLevel
            nextLevel = 0
            tail = null
        }

    }
    return result
};

let node = listOfDepth(root)

console.log(node, node.length)