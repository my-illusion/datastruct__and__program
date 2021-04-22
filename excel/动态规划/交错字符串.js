function isInterleave(s1, s2, s3) {
    const m = s1.length
    const n = s2.length

    const t = s3.length

    if( m + n !== t ) {
        return false
    }

    const dp = new Array(n + 1).fill(false)
    dp[0] = true // 这个是基础

    // dp数组的含义表示 s1的前i个元素 和 s2的前j个元素能够组成 s3的前i + j个元素
    for(let i = 0; i <= m; i++) {
        for(let j = 0; j <= n; j++) {
            if( i > 0) {
                dp[j] &= s1[i - 1] === s3[i + j - 1]
            }
            if( j > 0 ) {
                dp[j] |= dp[j-1] && s2[j-1] === s3[i + j - 1]
            }
        }
    }

    return dp[n]
}

// 空间优化版本
// dp[0][0] = true
// dp[i][j] = dp[i-1][j]  dp[i][j-1]

// dp[i-1][j] = dp[i]
// dp[i][j-1] = dp[i-1]