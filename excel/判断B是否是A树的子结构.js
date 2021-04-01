function TreeNode(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
}

const A = new TreeNode(
    8,
    new TreeNode(
        8,
        new TreeNode(
            9,
            null,
            null
        ),
        new TreeNode(
            2,
            new TreeNode(
                4,
                null,
                null
            ),
            new TreeNode(
                7,
                null,
                null
            )
        )
    ),
    new TreeNode(7, null, null)
)

const B = new TreeNode(
    8,
    new TreeNode(
        9, null, null
    ),
    new TreeNode(
        2, null, null
    )
)

function hasSameTree(A, B) {
    let result = false
    if(A != null && B != null) {
        if(A.val === B.val) {
            result = compTree(A, B)
        }

        if(!result)
            result = hasSameTree(A.left, B)
        
        if(!result)
            result = hasSameTree(A.right, B)
    }
    return result
}

function compTree(A, B) {
        if(B === null) return true
        if(A === null) return false

        if(A.val !== B.val) return false

        return compTree(A.left, B.left) && compTree(A.right, B.right)
}

console.log(hasSameTree(A, B))