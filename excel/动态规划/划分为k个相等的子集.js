// 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。

// 示例 1：

// 输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
// 输出： True
// 说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
//  

// 提示：

// 1 <= k <= len(nums) <= 16
// 0 < nums[i] < 10000

// 首先求数组的总和 sum / 4 如果不等于0 那么一定划分不成功
// 然后这道问题就转化成了求 填满容量为 sum / k的背包的方案有多少种组合问题 01背包 求
// function canPartitionKSubsets(nums, k) {
//     const sum = nums.reduce((i, j) => i + j, 0)
//     if(sum % k !== 0) return false

//     const target = sum / k

//     const dp = new Array(target + 1).fill(0)
//     dp[0] = 1
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = target; j >= nums[i]; j--) {
//             if(j - nums[i] >= 0) {
//                 console.log(nums[i])
//                 dp[j] += dp[j - nums[i]]
//             }
//         }
//     }
//     console.log(dp)
//     return dp[target]
// }

function canPartitionKSubsets(nums, k) {
    const sum = nums.reduce((i, j) => i + j, 0)
    if(sum % k !== 0) return false
    const target = sum / k
    nums.sort()
    return dfs(nums,0, k, 0, [], target)
}

function dfs(nums, startIndex, count, curSum, visit, target) {
    
    if(count === 1) {
        return true
    }

    if(curSum === target) {
        return dfs(nums, 0, count - 1, 0, visit, target)
    }

    for(let i = startIndex; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i-1] && !visit[i-1]) continue
        if(!visit[i] && curSum + nums[i] <= target) {
            visit[i] = true
            const temp = dfs(nums, i + 1, count, curSum + nums[i], visit, target)
            if(temp) return true
            visit[i] = false
        }
    }
    return false
}

console.log(
    canPartitionKSubsets(
        [4, 3, 2, 3, 5, 2, 1],
        4
    )
)