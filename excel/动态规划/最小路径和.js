// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小。

// 设dp[i][j] 表示从0,0 到 i-1,j-1的总和最小的路径

// 递推公式 dp[i][j] = Math.min(dp[i-1][j] + dp[i][j-1]) + grid[i-1][j-1]

// 初始化 横向相加 纵向相加

// 递归顺序 1...i 1...j

function minPathSum(grid) {
    const lenA = grid.length
    const lenB = grid[0].length
    const dp = new Array(lenB).fill(0)
    dp[0] = grid[0][0]
    // 初始化
    for(let i = 1; i < lenB; i++) dp[i] = dp[i-1] + grid[0][i]
    
    for(let i = 1; i < lenA; i++) {
        for(let j = 0; j < lenB; j++) {
            dp[j] = Math.min(dp[j], j > 0 ? dp[j-1] : Infinity) + grid[i][j]
        }
    }
    return dp[lenB - 1]
}

console.log(
    minPathSum([[1,2],[5,6],[1,1]])
)


function minPathSum(grid) {
    const m = grid.length
    const n = grid[0].length

    // 设 dp[i][j] 表示 走到 i-1,j-1位置时的最小路径和
    // 递推公式 d[i][j] = Math.min( dp[i-1][j], dp[i][j-1] ) + grid[i-1][j-1]
    const dp = new Array(m  + 1).fill().map(() => new Array(n + 1).fill(0))
    // 初始化 横向和纵向的相加
    for(let i = 1; i <= n; i++) dp[1][i] = dp[1][i-1] + grid[0][i-1]

    for(let i = 1; i <= m; i++) dp[i][1] = dp[i-1][1] + grid[i-1][0]

    for(let i = 2; i <= m; i++) {
        for( let j = 2; j <= n; j++) {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i-1][j-1]
        }
    }
    return dp[m][n]
}