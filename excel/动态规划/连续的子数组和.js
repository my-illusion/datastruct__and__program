// 给定一个包含 非负数 的数组和一个目标 整数 k ，编写一个函数来判断该数组是否含有连续的子数组，其大小至少为 2，且总和为 k 的倍数，即总和为 n * k ，其中 n 也是一个整数。

//  

// 示例 1：

// 输入：[23,2,4,6,7], k = 6
// 输出：True
// 解释：[2,4] 是一个大小为 2 的子数组，并且和为 6。
// 示例 2：

// 输入：[23,2,6,4,7], k = 6
// 输出：True
// 解释：[23,2,6,4,7]是大小为 5 的子数组，并且和为 42。

// 设dp[i][j]表示i...j连续的子数组的和
// dp[i][j] = dp[i+1][j-1] + s[i] + s[j]
function checkSubarraySum(nums, k) {
    const len = nums.length
    if(!len) return false
    const dp = new Array(len).fill(undefined).map(() => new Array(len).fill(0))

    // 初始化
    for(let i = 0; i < len; i++) {
        dp[i][i] = nums[i]
    }

    for(let j = 0; j < len; j++) {
        for(let i = j - 1; i >= 0; i--) {
            if(j - i === 1) {
                if((nums[i] + nums[j]) % k === 0) {
                    return true
                }
                dp[i][j] = nums[i] + nums[j]
            }else{
                if(
                    !((dp[i + 1][j - 1] + nums[i]) % k)
                    ||
                    !((dp[i + 1][j - 1] + nums[j]) % k)
                    ||
                    !((dp[i + 1][j - 1] + nums[i] + nums[j]) % k)
                ) {
                    return true
                }
                dp[i][j] = dp[i + 1][j - 1] + nums[i] + nums[j]
            }
        }
    }
    return false
}

// 空间上的优化
// i + 1 ----> i
// j - 1 ----> j

// i 从前向后遍历 


function checkSubarraySum(nums, k) {
    const len = nums.length
    if(!len) return false
    const dp = new Array(len).fill(0)
    // 初始化
    for(let i = 0; i < len; i++) {
        dp[i] = nums[i]
    }

    for(let j = 0; j < len; j++) {
        for(let i = 0; i <= j - 1; i++) {
            if( j - i === 1) {
                dp[i] = nums[i] + nums[j]
            }else if(j - i === 2) {
                dp[i] = nums[i + 1] + nums[i] + nums[j] 
            }else{
                dp[i] = dp[i + 1] + nums[i] + nums[j]
            }
            if(
                dp[i] % k === 0
            ) return true
        }
    }
    return false
}