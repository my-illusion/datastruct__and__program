// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
// 如果没有任何一种硬币组合能组成总金额，返回 -1。

// 你可以认为每种硬币的数量是无限的。

// 输入：coins = [1, 2, 5], amount = 11
// 输出：3 
// 解释：11 = 5 + 5 + 1

// 完全背包问题 求最小个数 无所谓遍历顺序

function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity)

    dp[0] = 0
    for(let i = 0, len = coins.length; i < len; i++) {
        for(let j = coins[i]; j <= amount; j++) {
            if(dp[j-coins[i]] !== Infinity)
                dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j])
        }
    }
    return dp[amount] !== Infinity ? dp[amount] : -1
}


// 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。

// 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。

// 假设每一种面额的硬币有无限个。


function change(amount, coins) {
    // 完全背包问题 求组合数目 先遍历物品 再遍历背包
    const len = coins.length

    const dp = new Array(amount + 1).fill(0)

    dp[0] = 1

    for(let i = 0; i < coins.length; i++) {
        for(let j = coins[i]; j <= amount; j++){
            dp[j] += dp[j - coins[i]]
        }
    }

    return dp[amount]
}