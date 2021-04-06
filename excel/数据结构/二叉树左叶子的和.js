function sumOfLeftLeaves(root) {
    if(!root) return 0

    let middleValue = 0
    if(root.left && root.left.left === null && root.left.right === null) {
        middleValue = root.left.val
    }

    return middleValue + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
}