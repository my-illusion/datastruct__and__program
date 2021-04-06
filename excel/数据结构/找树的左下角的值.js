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



function findBottomLeftValue(root) {
    let maxLen = -Infinity
    let maxLeftValue

    traverse(root, 0)

    function traverse(root, leftLen) {
        if(!root.left && !root.right) {
            if(leftLen > maxLen) {
                maxLen = leftLen
                maxLeftValue = root.val
            }
            return
        }

        if(root.left) {
            traverse(root.left, leftLen + 1)
        }

        if(root.right) {
            traverse(root.right, leftLen + 1)
        }
    }

    console.log(maxLeftValue)
}


findBottomLeftValue(root)

// function test() {
//     let a = 1
//     function b(){
//         console.log(a)
//     }
//     b()
// }

// test()
