// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

function findKthLargest(nums, k) {
    let start = 0, end = nums.length - 1

    let index = partition(nums, start, end)

    while(index !== k - 1) {
        if(index > k - 1) {
            end = index - 1
        }else{
            start = index + 1
        }
        index = partition(nums, start, end)
    }

    return nums[index]
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

console.log(
    findKthLargest(
        [-1, -1],
        2
    )
)