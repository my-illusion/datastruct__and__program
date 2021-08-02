function maximumSum(arr) {
    // 设 dp[i][0] 表示 以i - 1结尾的不删除一次得到的最大子数组的和
    // dp[i][1] 表示以i-1结尾的删除一次得到的最大子数组的和 可以删除 i - 1位置的值
    const len = arr.length

    const dp = new Array(len + 1).fill(0)

    dp[0][0] = arr[0]
    dp[0][1] = -Infinity
    let ans = arr[0]
    for(let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i-1][0] + arr[i], arr[i])
        dp[i][1] = Math.max( (dp[i-1][1] === -Infinity ? 0 : dp[i-1][1]) + arr[i], dp[i-1][0])
        ans = Math.max(
            ans,
            Math.max(dp[i][0], dp[i][1])
        )
    }
    return ans
}