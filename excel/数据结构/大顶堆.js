function getHeap(nums) {
    const len = nums.length

    for(let i = len >> 1 - 1; i >= 0; i--) {
        updateHeap(nums, i)
    }

    console.log(nums)
}

function updateHeap(nums, start) {
    if(start >= nums.length >> 1) return

    let k = 2 * start + 1

    if(k > nums.length - 1){
        // 当前结点不存在子结点
        return
    } 

    if( k + 1 <= nums.length - 1 && nums[k+1] > nums[k]) k++

    if(nums[k] > nums[start]) {
        const temp = nums[start]
        nums[start] = nums[k]
        nums[k] = temp

        updateHeap(nums, k)
    }
}

console.log(getHeap(
    [1, 2, 3, 4, 5, 6]
))

/**
 *    6
 *  5   3
 * 4 2 1
*/