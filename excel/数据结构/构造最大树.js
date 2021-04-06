function constructMaximumBinaryTree(nums) {
    let maxValue = -Infinity,
    maxValueIndex;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > maxValue) {
            maxValue = nums[i]
            maxValueIndex = i
        }
    }

    const root = new TreeNode(maxValue, null, null)

    if(maxValueIndex > 0) {
        root.left = constructMaximumBinaryTree(nums.slice(0, maxValueIndex))
    }

    if(maxValueIndex < nums.length - 1) {
        root.right = constructMaximumBinaryTree(nums.slice(maxValueIndex + 1))
    }

    return root
}