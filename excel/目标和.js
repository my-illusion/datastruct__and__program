// 给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。

// 返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

// 输入：nums: [1, 1, 1, 1, 1], S: 3
// 输出：5
// 解释：

// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3

// 一共有5种方法让最终目标和为3。

/**
 * 将组合中 包含正号的标记为左组合 包含负号的标记为右组合
 * 则 left - right = s
 * left + right = sum
 * 可得 left = (sum + s) / 2
 * 可将问题转化为 容量为 left 的背包装满它的方法总共有多少种的 0 1背包问题
 */
function findTargetSumWays(nums, s) {
    const sum = nums.reduce((a, b) => a + b)

    if(s > sum) return 0
    if((sum + s) / 2 !== 0) return 0

    const target = (sum + s) >> 1
    const dp = new Array(target + 1).fill(0)

    for(let i = 0; i < nums.length; i++) {
        for(let j = target; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]]
        }
    }

    return dp[target]
}