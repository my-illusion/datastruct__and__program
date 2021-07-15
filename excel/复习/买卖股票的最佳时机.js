// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

//  

// 示例 1：

// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

function maxProfit(prices) {
    // 设dp[i][0] 表示第i天持有股票带来的收益
    // dp[i][1] 表示当天不持有股票带来的收益
    const len = prices.length

    const dp = new Array(len).fill(0).map(() => new Array(2).fill(0))

    // 递推公式 dp[i][0] = dp[i-1][1] - prices[i]
    // dp[i][1] = dp[i-1][0] + prices[i]

    dp[0][0] = -prices[0]
    dp[0][1] = 0

    for(let i = 1; i < len; i++) {
        dp[i][0] = Math.max(-prices[i], dp[i-1][0])
        dp[i][1] = Math.max(dp[i-1][0] + prices[i], dp[i-1][1])
    }

    return dp[len - 1][1] < 0 ? 0 : dp[len - 1][1]
}

console.log(
    maxProfit(
        [7,1,5,3,6,4]
    )
)


// 优化版本
function maxProfit(prices){
    const len = prices.length

    const dp = new Array(2).fill(0).map(() => new Array(2).fill(0))

    dp[0][0] = -prices[0]

    for(let i = 1; i < len; i++) {
        dp[i % 2][0] = Math.max(dp[(i - 1) % 2][0], -prices[i])
        dp[i % 2][1] = Math.max(dp[(i - 1) % 2][1], dp[(i - 1) % 2][0] + prices[i])
    }

    return dp[(len - 1) % 2][1] < 0 ? 0 : dp[(len - 1) % 2][1]
}