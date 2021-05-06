// 给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。

// 下降路径 可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列
// （即位于正下方或者沿对角线向左或者向右的第一个元素）。具体来说，位置 (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1) 。

//  

// 示例 1：

// 输入：matrix = [[2,1,3],[6,5,4],[7,8,9]]
// 输出：13
// 解释：下面是两条和最小的下降路径，用加粗标注：
// [[2,1,3],      [[2,1,3],
//  [6,5,4],       [6,5,4],
//  [7,8,9]]       [7,8,9]]
// 示例 2：

// 输入：matrix = [[-19,57],[-40,-5]]
// 输出：-59
// 解释：下面是一条和最小的下降路径，用加粗标注：
// [[-19,57],
//  [-40,-5]]
// 示例 3：

// 输入：matrix = [[-48]]
// 输出：-48

// 提示：

// n == matrix.length
// n == matrix[i].length
// 1 <= n <= 100
// -100 <= matrix[i][j] <= 100


// dp[i][j] 表示到达ij位置的 最小下降路径的和
var minFallingPathSum = function(matrix) {
    const n = matrix.length
    const m = matrix[0].length

    const dp = new Array(n).fill(undefined).map(() => new Array(m).fill(0))

    for(let i = 0; i < m; i++) {
        dp[0][i]  =  matrix[0][i]
    }

    for(let i = 1; i < n; i++) {
        for(let j = 0; j < m; j++) {
            let a = j > 0 ? dp[i-1][j-1] : +Infinity
            let b = dp[i-1][j]
            let c = j < m - 1 ? dp[i-1][j+1] : +Infinity
            dp[i][j]  = Math.min.apply(Math, [a, b, c]) + matrix[i][j]
        }
    }

    let res = +Infinity
    for(let i = 0; i < m; i++) res = Math.min(res, dp[n-1][i])
    return res
};