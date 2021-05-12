
/**
 * 设 dp[i] 表示以i结尾的连续数组的最大和
 * dp[i] = dp[i - 1] + nums[i] if(dp[i-1] > 0) else nums[i]
 * @param {*} nums 
 * @returns 
 */
function maxSubArray(nums) {
    const len = nums.length
    if(!len) return 0

    const dp = new Array(len).fill(0)

    for(let i = 0; i < len; i++) dp[i] = nums[i]

    let res = dp[0]
    
    for(let i = 1; i < len; i++) {
        dp[i] = Math.max(dp[i], (dp[i-1] > 0 ? dp[i-1] : 0) + nums[i])
        res = Math.max(res, dp[i])
    }

    return res
}