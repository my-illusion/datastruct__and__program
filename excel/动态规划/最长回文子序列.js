// 给定一个字符串 s ，找到其中最长的回文子序列，并返回该序列的长度。可以假设 s 的最大长度为 1000 。

// 设 dp[i][j] 表示 s 中 下标 i...j之间的最长回文子序列 其中 i <= j 

// 递推公式 
// 如果 s[i] === s[j] dp[i][j] = dp[i+1][j-1] + 2
// 如果 s[i] !== s[j] dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])

// 递推顺序 从正向遍历

// 初始化 dp[i][i] = 1

// function longestPalindromeSubseq(s) {
//     const len = s.length
//     const dp = new Array(len).fill(undefined).map(() => new Array(len).fill(1))

//     for(let j = 0; j < len; j++) {
//         for(let i = j - 1; i >= 0; i--) {
//             if(j - i === 1) {
//                 if(s[i] === s[j]) dp[i][j] = 2
//                 continue
//             }
//             if(s[i] === s[j]) {
//                 dp[i][j] = dp[i+1][j-1] + 2
//             }else{
//                 dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
//             }
//         }
//     }
//     return dp[0][len - 1]
// }


// // 贪心算法
// function longestPalindromeSubseq(s) {

// }


console.log(
    longestPalindromeSubseq(
        "cbbd"
    )
)