function rob(nums) {
    const len = nums.length

    if(len === 1) return nums[0]
    if(len === 2) return Math.max(nums[0], nums[1])

    const dp = new Array(len).fill(undefined).map(() => new Array(2).fill(0))

    // dp[i][0] 表示i个位置不偷 dp[i][1] 表示i个位置偷
    // dp[i][0] = Math.max(dp[i-1][1], dp[i-1][0])
    // dp[i][1] = dp[i-1][0] + nums[i]

    dp[0][0] = 0
    dp[0][1] = nums[0]

    for(let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i-1][1], dp[i-1][0])
        dp[i][1] = dp[i-1][0] + nums[i]
    }

    return Math.max(dp[len-1][0], dp[len-1][1])
}