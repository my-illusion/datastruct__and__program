// 给定一个未排序的整数数组，找到最长递增子序列的个数。

// 输入: [1,3,5,4,7]
// 输出: 2
// 解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。

// 输入: [2,2,2,2,2]
// 输出: 5
// 解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。

// 设dp[i]表示以i结尾的最长递增子序列的长度

// 

function findNumberOfLIS(nums) {
    const len = nums.length

    const dp = new Array(len).fill(1)

    let result = 1
    const count = new Array(len).fill(1)
    for(let i = 1; i < len; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[j] < nums[i]){
                if (dp[j] + 1 > dp[i]) {
                    count[i] = count[j];
                } else if (dp[j] + 1 === dp[i]) {
                    count[i] += count[j];
                }
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        if(dp[i] > result) {
            result = dp[i]
        }
    }

    let temp = 0; // 统计结果 
    for (let i = 0; i < nums.size(); i++) {
        if (result == dp[i]) temp += count[i];
    }

    return temp
}

console.log(
    findNumberOfLIS(
        [1, 3, 2]
    )
)