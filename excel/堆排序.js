function heapSort(nums) {
    const len = nums.length

    for(let i = (len >>> 1) - 1; i >= 0; i--) {
        updateHeap(nums, i)
    }

    const result = []
    while(nums.length) {
        result.push(nums[0])
        // 交换位置
        nums[0] = nums[nums.length - 1]

        nums.length = nums.length - 1

        updateHeap(nums, 0)
    }
    return result
}

function updateHeap(nums, start) {
    const len = nums.length
    if(start >= len >>> 1) return
    let k = 2 * start + 1
    if(k >= len) return
    if(k + 1 <= len - 1 && nums[k+1] > nums[k]) k++;

    if(nums[k] > nums[start]) {
        const temp = nums[k]
        nums[k] = nums[start]
        nums[start] = temp

        updateHeap(nums, k)
    }
}

console.log(
    heapSort(
        [4, 3, 5, 5,  6, 7, 2, 1]
    )
)