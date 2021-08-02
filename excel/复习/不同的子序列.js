function numDistinct(s, t) {
    const len1 = s.length
    const len2 = t.length

    const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0))

    for(let i = 0; i <= len1; i++) dp[i][0] = 1

    for(let i = 1; i <= len1; i++) {
        for(let j = 1; j <= len2; j++) {
            if(s[i-1] === t[j-1]) {
                dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
            }else{
                dp[i][j] = dp[i-1][j]
            }
        }
    }

    return dp[len1][len2]
}