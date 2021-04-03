// 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。 

function change(amount, coins) {
    vector<int> dp(amount + 1, 0);
    dp[0] = 1;
    for (let i = 0; i < coins.size(); i++) { // 遍历物品
        for (let j = coins[i]; j <= amount; j++) { // 遍历背包
            dp[j] += dp[j - coins[i]];
        }
    }
    return dp[amount];
}