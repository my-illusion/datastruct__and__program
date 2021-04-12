// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

function permuteUnique(nums) {
    const path = []
    const result = []
    nums.sort()
    const used = new Array(nums.length).fill(0)
    backtracking(nums, used, path, result)
    return result
}

function backtracking(nums, used, path, result) {
    if(path.length >= nums.length) {
        result.push(path.concat())
        return
    }

    for(let i = 0; i < nums.length; i++) {
        if( i > 0 && nums[i] === nums[i-1] && used[i - 1] === false) continue

        if(!used[i]) {
            used[i] = 1
            backtracking(nums, used, path.concat(nums[i]), result)
            used[i] = 0
        }
    }
}