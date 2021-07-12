function findLengthOfLCIS(nums) {
    // 设 dp[i] 表述以nums[i]结尾的最长连续递增序列
    // for j from 0 to i - 1 if(nums[i] > nums[j]) dp[i] = Math.max(dp[j] + 1, dp[i])

    const len = nums.length
    if(len < 2) return len

    const dp = new Array(len).fill(1)

    let max = 0

    for(let i = 1; i < len; i++){
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i])
            }
        }
        if(dp[i] > max) max = dp[i]
    }
    return max
}