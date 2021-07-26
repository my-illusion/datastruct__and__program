// 字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。
//  给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。

// 输入: 
// first = "pale"
// second = "ple"
// 输出: True

function oneEditAway(first, second) {
    // 求最小编辑距离？？？？
    // 设dp[i][j] 表示以 i-1结尾的first 和 以j-1结尾的second变为相等的最小编辑次数
    const len1 = first.length
    const len2 = second.length

    if(!len1) {
        if(len2 < 2) return true
        return false
    }

    if(!len2) {
        if(len1 < 2) return true
        return false
    }

    const dp = new Array(len1 + 1).fill().map(() => new Array(len2 + 1).fill(0))

    // 递推公式
    // if first[i-1] === second[j-1] dp[i][j] = dp[i-1][j-1]
    // else dp[i][j] = Math.min( dp[i-1][j], dp[i][j-1], dp[i-1][j-1] ) + 1

    // 初始化
    // dp[1][i] = i
    for(let i = 1; i <= len1; i++) {
        dp[0][i] = i
    }

    for(let i = 1; i <= len2; i++) {
        dp[i][0] = i
    }

    for(let i = 1; i <= len1; i++) {
        for(let j = 1; j <= len2; j++) {
            if(first[i-1] === second[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            }else{
                dp[i][j] = Math.min( dp[i-1][j], dp[i][j-1], dp[i-1][j-1] ) + 1
            }
        }
    }

    return dp[len1][len2] === 1
}