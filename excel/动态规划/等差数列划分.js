// 如果一个数列至少有三个元素，并且任意两个相邻元素之差相同，则称该数列为等差数列。

// 例如，以下数列为等差数列:

// 1, 3, 5, 7, 9
// 7, 7, 7, 7
// 3, -1, -5, -9
// 以下数列不是等差数列。

// 1, 1, 2, 5, 7
//  

// 数组 A 包含 N 个数，且索引从0开始。数组 A 的一个子数组划分为数组 (P, Q)，P 与 Q 是整数且满足 0<=P<Q<N 。

// 如果满足以下条件，则称子数组(P, Q)为等差数组：

// 元素 A[P], A[p + 1], ..., A[Q - 1], A[Q] 是等差的。并且 P + 1 < Q 。

// 函数要返回数组 A 中所有为等差数组的子数组个数。

//  

// 示例:

// A = [1, 2, 3, 4]

// 返回: 3, A 中有三个子等差数组: [1, 2, 3], [2, 3, 4] 以及自身 [1, 2, 3, 4]。

// 动态规划
// 设 dp[i][j] 表示 i...j是否为等差数组
// dp[i][j] = dp[i+1][j] && nums[i+1] - nums[i] === nums[i + 2] - nums[i + 1]
// dp[i][j] = dp[i][j - 1] && nums[j] - nums[j - 1] === nums[j - 1] - nums[j - 2]

// function numberOfArithmeticSlices(nums) {
//     const len = nums.length
//     if(len < 3) return 0

//     const dp = new Array(len).fill(undefined).map(() => new Array(len).fill(false))
//     let result = 0
//     // 初始化
//     for(let j = 0; j < len; j++) {
//         for(let i = j - 2; i >= 0; i--) {
//             // 判断当距离为3的时候的特殊情况
//             if(j - i + 1 === 3) {
//                 if(nums[j] - nums[j-1] === nums[j-1] - nums[j - 2]) {
//                     dp[i][j] = true
//                 }else{
//                     dp[i][j] = false
//                 }
//             }else{
//                 dp[i][j] = dp[i + 1][j] && (nums[i + 1] - nums[i] === nums[i + 2] -  nums[i + 1])
//                 dp[i][j] = dp[i][j - 1] && (nums[j] - nums[j - 1] === nums[j - 1] - nums[j - 2])
//             }

//             if(dp[i][j]) {
//                 result++
//             }
//         }
//     }
//     return  result
// }

function numberOfArithmeticSlices(nums) {
    const len = nums.length
    const dp = new Array(len).fill(0)
    let result = 0
    for(let i = 2; i < len; i++) {
        if(nums[i] - nums[i-1] === nums[i-1] - nums[i-2]) {
            dp[i] = 1 + dp[i-1]
            result += dp[i]
        }
    }
    return result
}

console.log(
    numberOfArithmeticSlices(
        [1, 2, 3, 4]
    )
)

// 优化版本 降低空间
// 可以看到当前dp[i][j]的状态只取决于 i + 1 j - 1


