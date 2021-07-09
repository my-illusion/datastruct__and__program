function maxProfit(prices) {
    const len = prices.length

    const dp = new Array(len).fill().map(() => new Array(4).fill(0))

    // 0 无操作 1买入 2卖出 3冷静期
    dp[0][1] = -prices[0]
    for(let i = 1; i < len; i++) {
        dp[i][0] = dp[i-1][0]
        dp[i][1] = Math.max(dp[i-1][1], Math.max(dp[i-1][0], dp[i-1][3]) - prices[i])
        dp[i][2] = Math.max(dp[i-1][2], dp[i-1][1] + prices[i])
        dp[i][3] = dp[i-1][2]
    }

    return Math.max(dp[len-1][2], dp[len-1][3])
}