// 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用一次。

// 说明：

// 所有数字（包括目标数）都是正整数。
// 解集不能包含重复的组合。 
// 示例 1:

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 所求解集为:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]

function combinationSum2(candidates, target) {
    const path = []
    const result = []
    const hasUsed = {}
    candidates.sort()
    backtracking(candidates, target, 0, 0, path, result, hasUsed)

    console.log(result)
    return result
}

function backtracking(candidates, target, startIndex, curSum, path, result, hasUsed) {
    if(curSum === target) {
        result.push(path.concat())
        return
    }

    for(let i = startIndex; i < candidates.length; i++) {
        if(i > startIndex && candidates[i] === candidates[i-1]) continue
        path.push(candidates[i])
        backtracking(candidates, target, i + 1, curSum + candidates[i], path, result, hasUsed)
        path.pop()
    }
}

combinationSum2([10,1,2,7,6,1,5], 8)