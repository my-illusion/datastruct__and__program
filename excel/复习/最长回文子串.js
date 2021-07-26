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

// 给你一个字符串 s，找到 s 中最长的回文子串。

function longestPalindrome(s) {
    // 设 dp[i][j] 表示以i..j的子串是否为回文子串
    // if(s[i] !== s[j]) dp[i][j] = false
    // else dp[i][j] = dp[i+1][j-1]
    const len = s.length
    if(len === 1) return s

    const dp = new Array(len).fill(false).map(() => new Array(len).fill(false))

    // 初始化dp
    for(let i = 0; i < len; i++) dp[i][i] = true

    let max = s[0]

    // 确定遍历顺序 i: len - 1 -> 0  j: i + 1 -> len - 1
    for(let i = len - 1; i >= 0; i--) {
        for(let j = i + 1; j <= len - 1; j++) {
            if(s[i] === s[j]) {
                if( j - i === 1) dp[i][j] = true
                else dp[i][j] = dp[i+1][j-1]
            }else{
                dp[i][j] = false
            }

            if(dp[i][j] && (!max || max.length < j - i + 1)) max = s.substring(i, j + 1)
        }
    } 

    return max
}

console.log(
    longestPalindrome('abaa')
)