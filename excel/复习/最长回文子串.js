/**
 * @param {string} s
 * @return {string}
 */
 function longestPalindrome(s) {
    // dp[i][j] s[i] === s[j] dp[i][j] = s[i] === s[j] && dp[i+1][j-1]
    const len = s.length

    const dp = new Array(len).fill().map(() => new Array(len).fill(false))
    for(let i = 0; i < len; i++) {
        dp[i][i] = true
    }
    let max = s[0]
    for(let i = len - 1; i >= 0; i--) {
        for(let j = i + 1; j < len; j++) {
            if(j - i === 1){
                dp[i][j] = s[i] === s[j]
            }else{
                dp[i][j] = s[i] === s[j] && dp[i+1][j-1]
            }
            if(dp[i][j] && j - i + 1 > max.length) max = s.substring(i, j + 1)
        }
    }
    return max
}