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




function bubbleBase(nums) {
    const len = nums.length
    if(len < 2) return nums
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len - i - 1; j++) {
            if(nums[j] > nums[j+1]) {
                swap(nums, j, j+1)
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

function bubbleAndvance(nums) {
    const len = nums.length
    let i = len - 1
    while(i > 0) {
        let pos = 0
        let j = 0
        while(j < i){
            if(nums[j] > nums[j+1]){
                pos = j
                swap(nums, j, j+1)
            }
            j++
        }
        i = pos
    }
    return nums
}

console.log(
    bubbleAndvance([4, 2, 3, 1, 3, 5, 8, 7]), 'jjj'
)