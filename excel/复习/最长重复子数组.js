//  给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

function findLength(nums1, nums2) {
    // 设dp[i][j] 表示以i-1结尾的nums1和j-1结尾的nums2的公共最长子数组的长度
    const len1 = nums1.length
    const len2 =  nums2.length

    const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0))

    // 递推公式
    // if nums[i-1] === nums[j-1] dp[i][j] = dp[i-1][j-1] + 1
    // else dp[i][j] = 0
    dp[0][0] = 0
    let result = 0
    for(let i = 1; i <= len1; i++) {
        for(let j = 1; j <= len2; j++) {
            if(nums1[i-1] === nums2[j-1]) {
                dp[i][j] = Math.max(dp[i][j], dp[i-1][j-1] + 1)
            }else{
                dp[i][j] = 0
            }
            result = Math.max(result, dp[i][j])
        }
    }
    return result
}