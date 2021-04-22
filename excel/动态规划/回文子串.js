/**
 * 给定字符串s, 求其回文子串的数目
 * 设 dp[i][j] 表示 i...j是否为回文字符串
 * @param {*} s 
 */
function countSubstrings(s) {
    const len = s.length
    if(!len) return 0

    let result = 0
    const dp = new Array(len).fill(undefined).map(() => new Array(len).fill(true))
    for(let j = 0; j < len; j++) {
        for(let i = 0; i < j; i++) {
            if(j - i === 1) {
                if(s[i] === s[j]) dp[i][j] = true
                else dp[i][j] = false
            }else {
                dp[i][j] = dp[i+1][j-1] && s[i] === s[j]
            }

            if(dp[i][j]) result++
        }
    }
    return result
}