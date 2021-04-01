/**
 * 动态规划求解最长公共子序列问题
 * 1、首先分析是否可以分解为子问题
 * text1...sm
 * t1...tn
 * 假设 x1...xk 是 s 和 t 的最长公共子序列
 * 如果 xk = sm = sn 那么 xk-1 是 sm-1 和 sn-1的最长公共子序列
 * 如果 xk = sm != sn 那么 xk 是 sm 和 sn-1的最长公共子序列
 * 如果 xk = sn != sm 那么 xk 是 sm-1 和 sn-1的最长公共子序列
 * 
 * 2、子问题的最优解存在重叠子问题
 * 3、得出状态转移方程
 * si === sj dp[i, j] = dp[i-1, j-1] + 1
 * si !== sj dp[i, j] = Max( dp[i - 1, j], dp[i, j - 1] )
 */
function maxCommonsubqequnce(text1, text2) {
    const len1 = text1.length
    const len2 = text2.length
    if(!len1 || !len2) return 0
    const dp = new Array(len2).fill(undefined)
    dp.forEach((_, i) => {
        dp[i] = new Array(len1).fill(0)
    })

    for(let j = 0; j < len2; j++) {
        if(text2[j] === text1[0]) {
            dp[j][0] = 1
        }else{
            dp[j][0] = j < 1 ? 0 : dp[j - 1][0]
        }
    }

    for(let i = 0; i < len1; i++) {
        if(text1[i] === text2[0]) {
            dp[0][i] = 1
        }else{
            dp[0][i] = i < 1 ? 0 : dp[0][i - 1]
        }
    }



    for(let i = 1; i < len2; i++) {
        for(let j = 1; j < len1; j++) {
            if(text2[i] === text1[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            }else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1], dp[i - 1][j - 1])
            }
        }
    }

    return dp[len2 - 1][len1 - 1]
}

console.log(
    maxCommonsubqequnce(
        'vbcde',
        'acbdbe'
    )
)