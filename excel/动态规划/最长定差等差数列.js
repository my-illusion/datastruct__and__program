
// 示例 1：

// 输入：arr = [1,2,3,4], difference = 1
// 输出：4
// 解释：最长的等差子序列是 [1,2,3,4]。
// 示例 2：

// 输入：arr = [1,3,5,7], difference = 1
// 输出：1
// 解释：最长的等差子序列是任意单个元素。
// 示例 3：

// 输入：arr = [1,5,7,8,5,3,4,2,1], difference = -2
// 输出：4
// 解释：最长的等差子序列是 [7,5,3,1]。
//  

// 提示：

// 1 <= arr.length <= 105
// -104 <= arr[i], difference <= 104


// 超时了...
function longestSubsequence(arr, difference) {
    const len = arr.length

    if(len < 2) return len

    const dp = new Array(len).fill(1)

    let max = 0

    for(let i = 1; i < len; i++) {
        for(let j = 0; j < i; j++){
            if(arr[i] - arr[j] === difference) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        if(dp[i] > max) {
            max = dp[i]
        }
    }
    return max
}


function longestSubsequence(arr, difference) {
    const len = arr.length

    if(len < 2) return len

    const dp = new Array(len).fill(1)

    const hashMap = new Map()

    max = 0

    for(let i = 0; i < len; i++) {
        if(hashMap.has(arr[i] - difference)) {
            dp[i] = Math.max(dp[i], hashMap.get(arr[i]-difference) + 1)
        }
        hashMap.set(arr[i], dp[i])
        max = Math.max(max, dp[i])
    }
    return max
}