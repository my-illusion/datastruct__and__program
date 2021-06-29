// 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

// 示例：

// 输入：
// A: [1,2,3,2,1]
// B: [3,2,1,4,7]
// 输出：3
// 解释：
// 长度最长的公共子数组是 [3, 2, 1] 。

// 1 <= len(A), len(B) <= 1000
// 0 <= A[i], B[i] < 100

// dp[i][j] 表示 以A[i] B[j]结尾的最长相同子数组的长度
// if A[i] === B[j] dp[i][j] = dp[i-1][j-1] + 1
// else dp[i][j] = 0
function findLength(A, B) {
    const lenA = A.length
    const lenB = B.length

    const dp  = new Array(lenA).fill().map(_ => new Array(lenB).fill(0))

    let result = 0
    for(let i = 0; i < lenA; i++) {
        for(let j = 0; j < lenB; j++) {
            if(!dp[i][j] && A[i] === B[j]) dp[i][j] = 1

            if(A[i] === B[j]){
                dp[i][j] = Math.max(dp[i][j], dp[i-1][j-1] + 1)
            }else{
                dp[i][j] = 0
            }

            if(dp[i][j] > result) result = dp[i][j]
        }
    }
    return result
}