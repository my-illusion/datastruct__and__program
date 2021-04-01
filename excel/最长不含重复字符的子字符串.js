/**
 * 
 * 假设 dp[i]表示 以 si 为结尾的数组中最长的不含重复字符的子字符串
 * 得状态转移方程
 * 
 * @param {*} s 
 */

function lengthOfLongestSubstring(s) {
    const len = s.length
    if(len < 2) return len

    const dp = new Array(len).fill(0)

    dp[0] = 1
    let max = - 1
    for(let i = 1; i < len; i++) {
        // 找到最近的与 s[i] 相等的元素的索引
        let j = i - 1
        while(j >= 0 && s[j] !== s[i]) j--
        if( j < 0 ) {
            dp[i] = dp[i - 1] + 1
        }else{
            const d = i - j // 0 1 2 0 i - j + 1 - 1
            if(d <= dp[i - 1]) {
                dp[i] = d
            }else{
                dp[i] = dp[i - 1] + 1
            }
        }
        if(dp[i] > max) {
            max = dp[i]
        }
    }
    return max
}

console.log(lengthOfLongestSubstring('abancbds'))