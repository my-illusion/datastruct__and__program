// // 我们将给定的数组 A 分成 K 个相邻的非空子数组 ，我们的分数由每个子数组内的平均值的总和构成。计算我们所能得到的最大分数是多少。

// // 注意我们必须使用 A 数组中的每一个数进行分组，并且分数不一定需要是整数。

// // 示例:
// // 输入: 
// // A = [9,1,2,3,9]
// // K = 3
// // 输出: 20
// // 解释: 
// // A 的最优分组是[9], [1, 2, 3], [9]. 得到的分数是 9 + (1 + 2 + 3) / 3 + 9 = 20.
// // 我们也可以把 A 分成[9, 1], [2], [3, 9].
// // 这样的分组得到的分数为 5 + 2 + 6 = 13, 但不是最大值.
// // 说明:

// // 1 <= A.length <= 100.
// // 1 <= A[i] <= 10000.
// // 1 <= K <= A.length.
// // 答案误差在 10^-6 内被视为是正确的。

// // 感觉像是回溯算法分割成长度不同的组

// // 超时严重 考虑怎么剪枝
// function largestSumOfAverages(A, K) {
//     const hashMap = new Map()

//     return tracking(A, 0, K, hashMap)
// }

// function tracking(arr, startIndex, k, hashMap) {
//     // if(k === 0) return 0

//     if(hashMap.get(`${startIndex}-${k}`)) return hashMap.get(`${startIndex}-${k}`)

//     if(k === 1) {
//         return arr.slice(startIndex).reduce((a, b) => a + b) / (arr.length - startIndex)
//     }

//     let prefixSum = 0
//     let res = 0

//     // arr.length - 1 - i + 1 >= k
//     for(let i = startIndex; i <= arr.length - k; i++) {
//         // 选取下一个分组的切断位置
//         prefixSum += arr[i]
//         const average = prefixSum / (i - startIndex + 1)
//         const temp = tracking(arr, i + 1, k - 1, hashMap)
//         res = Math.max(res, average + temp)
//     }

//     hashMap.set(`${startIndex}-${k}`, res)

//     return res
// }

console.log(
    largestSumOfAverages(
        [9,1,2,3,9],
        3
    )
)

// 考虑动态规划
// 前缀和
// 设dp[i]表示以i结尾的k个分组最大平均值和
// 
function largestSumOfAverages(A, K) {
    const len = A.length
    const preSum = new Array(len).fill(0)
    
    preSum[0] = A[0]
    for(let i = 1; i < len; i++) {
        preSum[i] = preSum[i-1] + A[i] 
    }

    const dp = new Array(len).fill(undefined).map(() => new Array(K).fill(0))

    // dp[i][k] = dp[j][k-1] + average(j, i)

    for(let i = 0; i < len; i++) {
        dp[i][1] = preSum[i] / (i + 1)
        for(let j = 0; j < i; j++) {
            // k的值要 <=  j + 1
            for(let k = 2; k <= K ; k++) {
                dp[i][k] = Math.max((dp[i][k] || 0), dp[j][k-1] + (preSum[i] - preSum[j]) / (i - j) )
            }
        }
    }
    console.log(dp)
    return dp[len - 1][K]
}