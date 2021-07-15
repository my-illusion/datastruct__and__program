function shuffle(nums) {
    const len = nums
    for(let i = len - 1; i >= 0; i--) {
        swap(nums, i, randomIndex(i))
    }
}

function randomIndex(i){
    return Math.floor(Math.random() * (i))
}

function swap(nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}