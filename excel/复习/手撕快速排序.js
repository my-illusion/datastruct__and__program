function sortArray(nums) {
    return quickSort(nums, 0, nums.length - 1)
}

function quickSort(nums, start, end) {
    if(start >= end) return

    const middle = partition(nums, start, end)

    quickSort(nums, start, middle - 1)
    quickSort(nums, middle + 1, end)

    return nums
}

function partition(nums, start, end) {
    const middle = Math.floor( Math.random() * (end - start + 1) + start )
    swap(nums, middle, end)

    let slow = start - 1

    for(let i = start; i < end; i++) {
        if(nums[i] > nums[end]) {
            slow++
            if(slow !== i) {
                swap(nums, slow, i)
            }
        }
    }

    slow++

    swap(nums, slow, end)

    return slow
}

function swap(nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}