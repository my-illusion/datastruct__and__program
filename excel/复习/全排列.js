function permute(nums) {
    const used = []
    const path = []
    const result = []
    backtracking(nums, used, path, result)
    return result
}

function backtracking(nums, used, path, result) {
    if(path.length >= nums.length) {
        result.push(path.concat())
        return
    }

    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
        if(!used[i]) {
            used[i] = true
            backtracking(nums, used, path.concat(nums[i]), result)
            used[i] = false
        }
    }
}