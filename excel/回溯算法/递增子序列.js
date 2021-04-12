// 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是 2 。

// 输入：[4, 6, 7, 7]
// 输出：[[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]


function findSubsequences(nums) {
    // sort
    if(nums.length < 2) return []
    // nums.sort()
    const path = []
    const result = []
    const used = new Array(nums.length).fill(0)
    backtracking(nums, 0, path, result, used)

    return result
}

function backtracking(nums, index, path, result, used) {
    if(path.length >= 2) {
        result.push(path.concat())
    }

    if(index >= nums.length) return
    const uset = new Set()
    for(let i = index; i < nums.length; i++) {
        // if(i > 0 && nums[i] === nums[i-1] && !used[i - 1]) continue
        // 判断当前是否是递增的关系
        if(nums[i] < path[path.length - 1] || uset.has(nums[i]) ) continue
        path.push(nums[i])
        uset.add(nums[i])
        backtracking(nums, i + 1, path, result, used)
        path.pop(nums[i])
    }
}

console.log(
    findSubsequences(
        [1, 2, 1 ,1, 1]
    )
)