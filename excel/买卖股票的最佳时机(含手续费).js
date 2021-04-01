/**
 * 
 * 设 dp[i][0] 为当天买入带来的收益
 * dp[i][1] 为当天卖出带来的收益
 * 
 * 
 */
function maxProfit(prices, fee) {
    const len = prices.length

    const dp = new Array(len).fill(() => new Array(2))

    dp[0][0] = 0
    dp[0][1] = -prices[0]

    for(let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
        dp[i][1] = Math.max(dp[i - 1][1], dp[i-1][0] - prices[i] )
    }
    return dp[len - 1][0]
}

console.log(
    maxProfit(
        [1, 3, 2, 8, 4, 9],
        2
    )
)