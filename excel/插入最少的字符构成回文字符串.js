/**
 * 
 * 动态规划到底用一维还是二维数组，取决于对子问题的划分
 * 如果子问题的划分是双向的则是二维
 * 对于本题
 * 
 * 假设 xi,j 是si ~ sj字符串最少的插入字符数
 * 如果 si == sj 那么dp[i][j] = dp[i+1][j-1]
 * 如果 si !== sj 那么 dp[i][j] = Math.min(dp[i+1][j], dp[i][j-1]) + 1
 * 注意计算的方向
 * i 是依赖较大的值 所以递归的顺序是从大到小
 * j 是依赖较小的值 所以递归的顺序是从小到大
 */
function insertCh(s) {
    const len = s.length
    if(!len) return 0
    const dp = new Array(len).fill(0).map(() => new Array(len).fill(0))

    for(let j = 0; j < len; j++) {
        for(let i = j - 1; i >= 0; i--) {
            if(s[i] === s[j]) {
                if(j - i === 1) {
                    dp[i][j] = 0
                }else{
                    dp[i][j] = dp[i+1][j-1]
                }
            }else{
                if(j - i === 1) {
                    dp[i][j] = 1
                }else{
                    dp[i][j] = Math.min(dp[i+1][j], dp[i][j-1]) + 1
                }
            }
        }
    }
    return dp[0][len-1]
}

console.log(insertCh("abc"))