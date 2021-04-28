// 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

// 注意:

// 每个数组中的元素不会超过 100
// 数组的大小不会超过 200
// 示例 1:

// 输入: [1, 5, 11, 5]

// 输出: true

// 解释: 数组可以分割成 [1, 5, 5] 和 [11].
//  

// 示例 2:

// 输入: [1, 2, 3, 5]

// 输出: false

// 解释: 数组不能分割成两个元素和相等的子集.


// 转化为 0 1 背包问题
// 将 元素 0 - i 放到 总重量为 sum / 2的背包当中 看是否能正好放下 
function canPartition(nums) {
    const sum = nums.reduce((a, b)=> a + b)
    if(sum & 1) return false

    const target = sum >> 1

    
    const dp = new Array(10001).fill(0)
    // dp[j - weight[i]] + values[i]
    for(let i = 0; i < nums.length; i++) {
        for(let j = target; j >= nums[i]; j--){
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
        }
    }
    return dp[target] === sum - target
}