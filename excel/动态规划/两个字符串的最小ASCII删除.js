// 给定两个字符串s1, s2，找到使两个字符串相等所需删除字符的ASCII值的最小和。

// 示例 1:

// 输入: s1 = "sea", s2 = "eat"
// 输出: 231
// 解释: 在 "sea" 中删除 "s" 并将 "s" 的值(115)加入总和。
// 在 "eat" 中删除 "t" 并将 116 加入总和。
// 结束时，两个字符串相等，115 + 116 = 231 就是符合条件的最小和。
// 示例 2:

// 输入: s1 = "delete", s2 = "leet"
// 输出: 403
// 解释: 在 "delete" 中删除 "dee" 字符串变成 "let"，
// 将 100[d]+101[e]+101[e] 加入总和。在 "leet" 中删除 "e" 将 101[e] 加入总和。
// 结束时，两个字符串都等于 "let"，结果即为 100+101+101+101 = 403 。
// 如果改为将两个字符串转换为 "lee" 或 "eet"，我们会得到 433 或 417 的结果，比答案更大。
// 注意:

// 0 < s1.length, s2.length <= 1000。
// 所有字符串中的字符ASCII值在[97, 122]之间。

function minimumDeleteSum(s1, s2) {
    const len1 = s1.length
    const len2 = s2.length

    const dp = new Array(len1 + 1).fill(undefined).map(() => new Array(len2 + 1).fill(0))

    // 初始化
    for(let i = 1; i <= len1; i++) {
        dp[i][0] = dp[i-1][0] + s1.charCodeAt(i - 1)
    }
    for(let i = 1; i <= len2; i++) {
        dp[0][i] = dp[0][i-1] + s2.charCodeAt(i - 1)
    }

    for(let i = 1; i <= len1; i++) {
        for(let j = 1; j <= len2; j++) {
            let a = dp[i-1][j] + s1.charCodeAt(i - 1)
            let b = dp[i][j-1] + s2.charCodeAt(j - 1)
            let c = dp[i-1][j-1] + s1.charCodeAt(i - 1) + s2.charCodeAt(j - 1)
            if(s1[i-1] === s2[j-1]) {
                c = dp[i-1][j-1]
            }

            dp[i][j] = Math.min.apply(Math, [a, b, c])
        }
    }
    return dp[len1][len2]
}

console.log(
    minimumDeleteSum(
        "delete",
        "leet"
    )
)
