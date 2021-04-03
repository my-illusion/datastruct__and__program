// 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

// 你可以对一个单词进行如下三种操作：

// 插入一个字符
// 删除一个字符
// 替换一个字符


/**
 * 设 dp[i][j] 表示 A 的前i个字符 和 B的前j个字符的最小编辑距离
 * @param {*} word1 
 * @param {*} word2 
 */

function minDistance(word1, word2) {
    const len1 = word1.length
    const len2 = word2.length

    if (len1 * len2 == 0) {
        return len2 + len1;
    }

    const dp = new Array(len1 + 1).fill(undefined).map(() => new Array(len2 + 1).fill(undefined))

    for(let i = 0; i <= len1; i++) {
        dp[i][0] = i
    }

    for(let j = 0; j <= len2; j++) {
        dp[0][j] = j 
    }

    for(let i = 1; i <= len1; i++) {
        for(let j = 1; j <= len2; j++) {
            let a = dp[i - 1][j] + 1
            let b = dp[i][j - 1] + 1
            let c = dp[i - 1][j - 1]
            
            if( word2[j - 1] !== word1[i - 1] ){
                c = c + 1
            }
            dp[i][j] = Math.min.apply(null, [a, b, c])
        }
    }
    console.log(dp)
    return dp[len1][len2]
}

console.log(minDistance("horse", "ros"))