// 动态规划解法
// 设dp[i] 表示以i为结尾的最长连续递增序列
// 递推公式 dp[i] = dp[i-1] + 1 if(nums[i] > nums[i - 1])


// function findLengthOfLCIS(nums) {
//     const len = nums.length
//     if(len < 2) return len
//     const dp = new Array(len).fill(1)
//     let res = []
//     for(let i = 1; i < len; i++) {
//         if(nums[i] > nums[i-1]) {
//             dp[i] = dp[i-1] + 1
//         }

//         const temp = nums.slice(i - dp[i] + 1, i + 1)
//         if(temp.length > res.length) res = temp
//     }
//     return res
// }

// 双指针解法
function findLengthOfLCIS(nums) {
    const len = nums.length
    if(len < 2) return len

    let left = 0, right = 1;
    let globalMaxLen = 1, maxLen = 1

    while(right < len) {
        if(nums[right] > nums[left]) maxLen++
        else maxLen = 1

        left++
        right++

        if(globalMaxLen < maxLen) globalMaxLen = maxLen
    }
    return globalMaxLen
}