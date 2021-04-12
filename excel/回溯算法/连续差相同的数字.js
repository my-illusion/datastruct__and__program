// 返回所有长度为 n 且满足其每两个连续位上的数字之间的差的绝对值为 k 的 非负整数 。

// 请注意，除了 数字 0 本身之外，答案中的每个数字都 不能 有前导零。例如，01 有一个前导零，所以是无效的；但 0 是有效的。

// 你可以按 任何顺序 返回答案。

//  

// 示例 1：

// 输入：n = 3, k = 7
// 输出：[181,292,707,818,929]
// 解释：注意，070 不是一个有效的数字，因为它有前导零。
// 示例 2：

// 输入：n = 2, k = 1
// 输出：[10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
// 示例 3：

// 输入：n = 2, k = 0
// 输出：[11,22,33,44,55,66,77,88,99]
// 示例 4：

// 输入：n = 2, k = 2
// 输出：[13,20,24,31,35,42,46,53,57,64,68,75,79,86,97]

// n 表示位数 也就是递归的深度
// 每次都是从 0...9中取值
function numsSameConsecDiff(n, k) {
    const path = []
    const result = []

    backtracking(n, k, path, result)

    return result
}

function backtracking(n, k, path, result, startIndex = 1){
    if(path.length === n){
        result.push(path.join(""))
        return
    }

    for(let i = startIndex; i <= 9; i++) {
        // 判断当前值与path的最后一个值的绝对值的差值是否为k是的话则继续向下遍历
        if(path.length) {
            if(Math.abs(path[path.length - 1] - i) === k){
                path.push(i)
                backtracking(n, k, path, result, 0)
                path.pop()
            }
        }else{
            path.push(i)
            backtracking(n, k, path, result, 0)
            path.pop()
        }
    }
}

console.log(
    numsSameConsecDiff(
        1, 0
    )
)
