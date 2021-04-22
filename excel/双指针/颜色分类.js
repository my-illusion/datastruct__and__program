// 双指针

function swap(nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

function sortColors(nums) {
    let p1 = 0;
    let p2 = nums.length - 1

    while(p1 < p2) {
        if(nums[p2] === 0 || nums[p1] === 2) {
            // 交换两者
            swap(nums, p1, p2)
        }

        // 如果p1 === 0 p1++
        if(nums[p1] === 0) p1++
        if(nums[p2] === 2) p2--

        if(nums[p1] === 1 && nums[p2] === 1) {
            let index = p1 + 1
            while(index < p2) {
                if(nums[index] !== 1) {
                    swap(nums, index, p1)
                    break
                }
                index++
            }

            if(index === p2) break
        }
    }

    return nums
}

/**
 * [0,0,0,1,1,1]
 */

sortColors(
    [0,0,1,0,1,1]
)