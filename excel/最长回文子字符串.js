/**
 * 设dp[i][j]  表示 si...sj是否为回文串
 * dp[i][j] = dp[i+1][j-1] && s[i] === s[j]
 * 初始化
 * dp[0][i]  
 * 遍历顺序  
 * @param {*} s 
 */
function longestPalindrome(s) {
    let maxLength = 1
    let start = 0

    const len =  s.length
    const dp  =  new Array(len).fill(undefined).map(() => new Array(len).fill(0))

    for(let i  = 0; i < len; i++) dp[i][i] = true;

    for(let j = 0; j < len;  j++) {
        for(let i = j - 1; i >= 0; i--) {
            if( j - i ===  1 ) {
                if(s[j] === s[j - 1]) {
                    dp[i][j] = true
                }
                else dp[i][j] = false
            }else{
                dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]
            }

            if(dp[i][j]) {
                if( j - i + 1 > maxLength) {
                    maxLength =  j - i + 1
                    start = i
                }
            }
        }
    }

    // console.log(dp, dp[1][5], start, maxLength)
    return s.substring(start, start + maxLength)
}

console.log(longestPalindrome(
    "a"
))
