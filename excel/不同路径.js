// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

// 问总共有多少条不同的路径？

/**
 * 动态规划的转移方程
 * dp[i][j] 表示从0，0 到i，j位置的可达路径的数目
 * dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * @param {*} m 
 * @param {*} n 
 */

function uniquePaths(m, n) {
    const dp = new Array(n).fill(0)

    for(let i = 0; i < n; i++) dp[i] = 1
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i]+=dp[i-1]
        }
    }
    return dp[n-1]
}