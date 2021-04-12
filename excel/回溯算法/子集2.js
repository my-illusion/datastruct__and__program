// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

//  

// 示例 1：

// 输入：nums = [1,2,2]
// 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
// 示例 2：

// 输入：nums = [0]
// 输出：[[],[0]]

function subsetsWithDup(nums) {
    const path = []
    const result = []
    const used = new Array(nums.length).fill(0)
    nums.sort()
    backtracking(nums, 0, used, path, result)
    return result
}

function backtracking(nums, startIndex, used, path, result){
    
    result.push(path.concat())
    
    for(let i = startIndex; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i-1] && !used[i-1]) continue
        used[i] = true
        path.push(nums[i])
        backtracking(nums, i + 1, used, path, result)
        path.pop()
        used[i] = false
    }
}