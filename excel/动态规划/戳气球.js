// 有 n 个气球，编号为0 到 n - 1，每个气球上都标有一个数字，这些数字存在数组 nums 中。

// 现在要求你戳破所有的气球。戳破第 i 个气球，你可以获得 nums[i - 1] * nums[i] * nums[i + 1] 枚硬币。 

// 这里的 i - 1 和 i + 1 代表和 i 相邻的两个气球的序号。如果 i - 1或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球。

// 求所能获得硬币的最大数量。

//  

// 示例 1：
// 输入：nums = [3,1,5,8]
// 输出：167
// 解释：
// nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
// coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
// 示例 2：

// 输入：nums = [1,5]
// 输出：10
//  

// 提示：

// n == nums.length
// 1 <= n <= 500
// 0 <= nums[i] <= 100

// 数组长度为2应该是基础的情况吧 当长度为2 result = arr[0] + arr[1]

/**
 * dp[i][j] = for k in i...j dp[i][k] + dp[k][j] + arr[i] * arr[k] * arr[j]
 * k > i k < j
 * i 由大到小
 * j 由小到大
 * @param {*} nums 
 * @returns 
 */

function maxCoins(nums) {
    const n = nums.length

    if(!n) return 0
    
    const arr = new Array(n + 2).fill(1)

    for(let i = 1; i <= n; i++) {
        arr[i] = nums[i - 1]
    }

    const dp = new Array(n + 2).fill(undefined).map(() => new Array(n + 2).fill(0))

    for(let i = n - 1; i >= 0; i--) {
        for(let j = i + 2; j <= n + 1; j++) {
           
            for(let k = i + 1; k <= j - 1; k++) {

                let total = 0
                total += arr[i] * arr[k] * arr[j]
                total += dp[i][k] + dp[k][j]
                dp[i][j] = Math.max(dp[i][j], total)
            }
        }
    }

    return dp[0][n+1]
}
