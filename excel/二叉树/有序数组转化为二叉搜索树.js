function sortedArrayToBST(nums) {
    return helpers(nums, 0, nums.length - 1)
}

function helpers(nums, start, end) {
    if(start > end) return null

    const mid = (start + end) >>> 1
    const node = new TreeNode(mid)
    node.left = helpers(nums, start, mid - 1)
    node.right = helpers(nums, mid + 1, end)
    return node
}