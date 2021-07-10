function findLengthOfLCIS(nums) {
    const len = nums.length

    // dp[i] 表示 nums[i] 结尾的最长连续递增序列
    if(len < 2) return len

    const dp = new Array(len).fill(1)

    let max = 0

    for(let i = 1; i < len; i++) {
        if(nums[i] > nums[i-1]) {
            dp[i] = Math.max( dp[i-1] + 1, dp[i])
        }else{
            dp[i] = 1
        }

        if(dp[i] > max) max = dp[i]
    }

    return max
}