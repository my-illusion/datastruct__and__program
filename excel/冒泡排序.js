function bubble(nums) {
    const len = nums.length

    for(let i = len - 1; i >= 0; i--) {
        for(let j = 1; j <= i; j++) {
            if(nums[j] < nums[j-1]){
                swap(nums, j, j-1)
            }
        }
    }

    return nums
}

function swap(nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

console.log(
    bubble([4, 2, 3, 1, 3, 5, 8, 7])
)