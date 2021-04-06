// 给定一个非负整数数组，你最初位于数组的第一个位置。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。

// 示例:

// 输入: [2,3,1,1,4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
//      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置.

// 动态规划 -- 设dp[i] 表示到达i位置的最小的跳跃次数

// 确定状态转移方程 -- dp[i] = Math.min( dp[i], dp[j] + 1 if (nums[j] + j >= i) ) j从0到i-1

function jump(nums) {
    const len = nums.length

    const dp = new Array(len).fill(Infinity)

    dp[0] = 0

    for(let i = 1; i < len; i++) {
        for(let j = 0; j <= i - 1; j++) {
            if(nums[j] + j >= i) {
                dp[i] = Math.min(dp[i], dp[j] + 1)
            }
        }
    }
    return dp[len - 1]
}