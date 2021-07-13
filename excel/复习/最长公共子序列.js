function longestCommonSubsequence(text1, text2) {
    // 设dp[i][j] 表示 i - 1结尾的text1 和 j-1 结尾的text2 的最长公共子序列
    // if(text1[i - 1] === text2[j - 1]) dp[i][j] = Math.max(dp[i-1][j-1] + 1, dp[i][j])
    // else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])

    // 初始化 dp[0][0] = 0

    const len1 = text1.length
    const len2 = text2.length

    if(!len1 || !len2) return 0

    const dp = new Array(len1 + 1).fill().map(() => new Array(len2 + 1).fill(0))

    let maxLength = 0

    for(let i = 1; i <= len1; i++) {
        for(let j = 1; j <= len2; j++) {
            if(text1[i - 1] === text2[j - 1]) {
                dp[i][j] = Math.max(dp[i][j], dp[i-1][j-1] + 1)
            }else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1], dp[i][j])
            }
            if(dp[i][j] > maxLength) maxLength = dp[i][j]
        }
    }

    return maxLength
}

console.log(
    longestCommonSubsequence(
        'abc',
        'def'
    )
)