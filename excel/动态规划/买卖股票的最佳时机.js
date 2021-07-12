// 只能买卖一次

// function maxProfit(prices) {
//     // 设dp[i][0] 表示第i天持有股票带来的收益
//     // dp[i][1] 表示不持有的收益
//     // 
//     const len = prices.length
//     const dp = new Array(len).fill().map(() => new Array(2).fill(0))

//     // 初始化
//     dp[0][0] = -prices[0]
//     dp[0][1] = 0

//     for(let i = 1; i < len; i++) {
//         dp[i][0] = Math.max(dp[i-1][0], -prices[i])
//         dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i])
//     }

//     return dp[len - 1][1]
// }

// 可以买卖多次

// function maxProfit(prices) {
//     // 设dp[i][0] 表示第i天持有股票带来的收益
//     // dp[i][1] 表示不持有的收益
//     // 
//     const len = prices.length
//     const dp = new Array(len).fill().map(() => new Array(2).fill(0))

//     // 初始化
//     dp[0][0] = -prices[0]
//     dp[0][1] = 0

//     for(let i = 1; i < len; i++) {
//         dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]-prices[i])
//         dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i])
//     }

//     return dp[len - 1][1]
// }

// 买卖股票包含手续费

// function maxProfit(prices, fee) {
//     const len = prices.length
//     const dp = new Array(len).fill().map(() => new Array(2).fill(0))

//     // 初始化
//     dp[0][0] = -prices[0]
//     dp[0][1] = 0

//     for(let i = 1; i < len; i++) {
//         dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]-prices[i])
//         dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i] - fee)
//     }

//     return dp[len - 1][1]
// }


// 买卖股票只能买卖两笔
// function maxProfit(prices) {
//     // 确定状态 0 -- 无操作  1--第一次买入 2--第一次卖出 3--第二次买入 4--第二次卖出
//     // dp[i][0] = dp[i-1][0]
//     // dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])
//     // dp[i][2] = Math.max(dp[i-1][2], dp[i-1][1] + prices[i])
//     // dp[i][3] = Math.max(dp[i-1][3], dp[i-1][2] - prices[i])
//     // dp[i][4] = Math.max(dp[i-1][4], dp[i-1][3] + prices[i])
//     const len = prices.length
//     const dp = new Array(len).fill().map(() => new Array(5).fill(0))
//     dp[0][1] = -prices[0]
//     dp[0][3] = -prices[0]
//     for(let i = 1; i < len; i++) {
//         dp[i][0] = dp[i-1][0]
//         dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])
//         dp[i][2] = Math.max(dp[i-1][2], dp[i-1][1] + prices[i])
//         dp[i][3] = Math.max(dp[i-1][3], dp[i-1][2] - prices[i])
//         dp[i][4] = Math.max(dp[i-1][4], dp[i-1][3] + prices[i])
//     }
//     return dp[len-1][4]
// }

// 买卖股票包含冷冻期
function maxProfit(prices) {
    // 确定状态 0 -- 无操作 1--持有股票 2--不持有股票 3--冷冻期
    // dp[i][0] = dp[i-1][0]
    // dp[i][1] = Math.max(dp[i-1][1], Math.max(dp[i-1][2], dp[i-1][3]) + prices[i])
    // dp[i][2] = Math
}