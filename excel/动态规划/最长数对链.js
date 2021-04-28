// 给出 n 个数对。 在每一个数对中，第一个数字总是比第二个数字小。

// 现在，我们定义一种跟随关系，当且仅当 b < c 时，数对(c, d) 才可以跟在 (a, b) 后面。我们用这种形式来构造一个数对链。

// 给定一个数对集合，找出能够形成的最长数对链的长度。你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造。

//  

// 示例：

// 输入：[[1,2], [2,3], [3,4]]
// 输出：2
// 解释：最长的数对链是 [1,2] -> [3,4]

// 给出数对的个数在 [1, 1000] 范围内。

// 
function findLongestChain(pairs) {
    // 先排序
    pairs.sort((a, b) => a[0] - b[0])

    // 排序之后的数组的顺序 就是最终形成的数对链的长度 因为最后的元素的第二个元素一定比前边所有的第一个数大 根本不可能构成数对链
    // 设dp[i] 表示以i结尾的最长数对链的数目
    // 递推公式 dp[i] = Math.max( dp[i], dp[j] + 1 ) j from 0 to i - 1 if pairs[j][1] < pairs[i][0]

    const len  = pairs.length

    const dp = new Array(len).fill(0)

    // 初始化 以 pairs[0] 结尾的为1
    dp[0] = 1
    let maxLength = -1
    for(let i = 1; i < len; i++) {
        for(let j = 0; j < i; j++) {
            if(pairs[j][1] < pairs[i][0]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        if(dp[i] > maxLength){
            maxLength = dp[i]
        }
    }
    return maxLength
}