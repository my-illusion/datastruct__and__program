function uniquePaths(m, n) {
    // 设dp[i][j]表示 走到 i-1 j-1位置时的路径总数
    // dp[i][j] = dp[i-1][j] + dp[i][j-1]

    const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0))

    for(let i = 1; i <= n; i++) dp[1][i] = 1
    for(let i = 1; i <= m; i++) dp[i][1] = 1

    for(let i = 2; i <= m; i++) {
        for(let j = 2; j <= n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m][n]
}

// 空间优化的版本

function uniquePaths(m, n) {
    const dp = new Array(n + 1).fill(0)

    for(let i = 1; i <= n; i++) dp[i] = 1

    for(let i = 2; i <= m; i++) {
        for(let j = 2; j <= n; j++) {
            dp[j] += dp[j-1]
        }
    }
    return dp[n]
}

var uniquePaths = function(m, n) {
    const dp = new Array(n).fill(0)

   for(let i = 0; i < n; i++) dp[i] = 1
   for(let i = 1; i < m; i++) {
       for(let j = 1; j < n; j++) {
           dp[j] += dp[j-1]
       }
   }
   return dp[n-1]
};