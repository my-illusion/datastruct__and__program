function nextPermutation(nums) {
    const len = nums.length
    if(!len) return

    // 第一步从后往前找到非连续递增的值
    let i = len - 2
    while(i >= 0 && nums[i] >= nums[i + 1]) i--

    if(i >= 0) {
        // 找到第一个比 i 大的元素
        let j = len - 1
        while(j >= 0 && nums[j] <= nums[i]) j--

        swap(nums, i, j)
    }

    reverse(nums, i + 1, len - 1)
}

function swap(nums, i, j) {
    while(i < j) {
        swap(nums, i++, j--)
    }
}

function reverse(nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}