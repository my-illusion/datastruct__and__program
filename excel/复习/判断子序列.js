function isSubsequence(s, t) {
    // 设dp[i][j]表示以i-1结尾的s和以j-1结尾的t的公共子序列的长度
    // if s[i-1] === t[i-1] dp[i][j] = dp[i-1][j-1] + 1
    // else dp[i][j] = dp[i][j-1]

    const lenS = s.length
    const lenT = t.length

    if(lenT < lenS) return false

    const dp = new Array(lenS + 1).fill(0).map(() => new Array(lenT + 1).fill(0))

    for(let i = 1; i <= lenS; i++) {
        for(let j = 1; j <= lenT; j++) {
            if(s[i-1] === t[i-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            }else{
                dp[i][j] = dp[i][j-1]
            }
        }
    }

    return d[lenS][lenT] === lenS
}