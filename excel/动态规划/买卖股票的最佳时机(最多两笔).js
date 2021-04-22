/**
 * 动态规划 首先要搞清总共有几个状态
 * 0 --- 不持有股票,未进行过任何操作
 * 1 --- 第一次买入股票
 * 2 --- 第一次卖出股票
 * 3 --- 第二次买入股票
 * 4 --- 第二次卖出股票
 * 
 * dp[i][0] = dp[i - 1][0]
 * dp[i][1] = dp[i-1][0] - prices[i]
 */

function maxProfit(prices) {
    const len = prices.length
    if(!len) return 0

    const dp = new Array(len).fill(undefined).map(() => new Array(5).fill(0))

    dp[0][1] = -prices[0]
    dp[0][3] = -prices[0]

    for (let i = 1; i < len; i++) {
        dp[i][0] = dp[i - 1][0];
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
        dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
    }
    return dp[prices.size() - 1][4];
}