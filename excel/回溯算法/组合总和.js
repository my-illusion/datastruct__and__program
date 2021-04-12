// 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

// 说明：

// 所有数字都是正整数。
// 解集不能包含重复的组合。 
// 示例 1:

// 输入: k = 3, n = 7
// 输出: [[1,2,4]]
// 示例 2:

// 输入: k = 3, n = 9
// 输出: [[1,2,6], [1,3,5], [2,3,4]]


function combinationSum3(k, n) {
    const result = []
    const path = []

    backtracking(n, k, 0, 1, path, result)

    return result
}

function backtracking(n, k, targetSum, startIndex, path, result) {
    // 剪枝
    if(targetSum > n) return

    if(path.length === k){
        if(targetSum === n)
            result.push(path.concat())
        return
    }
    // 9 - x + 1 = k - path.length
    for(let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
        path.push(i)
        backtracking(n, k, targetSum + i, i + 1, path, result)
        path.pop()
    }
}

console.log(combinationSum3(3, 9))


