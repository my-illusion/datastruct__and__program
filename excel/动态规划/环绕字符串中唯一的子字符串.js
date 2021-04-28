// 把字符串 s 看作是“abcdefghijklmnopqrstuvwxyz”的无限环绕字符串，所以 s 看起来是这样的："...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....". 

// 现在我们有了另一个字符串 p 。你需要的是找出 s 中有多少个唯一的 p 的非空子串，尤其是当你的输入是字符串 p ，你需要输出字符串 s 中 p 的不同的非空子串的数目。 

// 注意: p 仅由小写的英文字母组成，p 的大小可能超过 10000。

//  

// 示例 1:

// 输入: "a"
// 输出: 1
// 解释: 字符串 S 中只有一个"a"子字符。
//  

// 示例 2:

// 输入: "cac"
// 输出: 2
// 解释: 字符串 S 中的字符串“cac”只有两个子串“a”、“c”。.
//  

// 示例 3:

// 输入: "zab"
// 输出: 6
// 解释: 在字符串 S 中有六个子串“z”、“a”、“b”、“za”、“ab”、“zab”。

// 1 2 3
// 1 1 0

// 首先 字符串p中所有的不同字符一定会出现
// 设dp[i]表示以i位置结尾的是s的子串的数目
// 递推公式 if s[i] 是s[i-1]的后续子串 那么 dp[i] = dp[i-1] + dp[i](0 | 1)
// 初始化 每个没出现过的单个的字符的值都为1其余的为0

// 上边的思路是错误的 因为没有考虑到字符串可能存在重复的情况 比如 abaab 这种 "ab"字符串就会被重复的计算 而且去重也是没有办法的

function findSubstringInWraproundString(p) {
    const len = p.length
    const dp = new Array(26).fill(0)

    let count = 1
    dp[p[0].charCodeAt(0) - 97] = 1
    for(let i = 1; i < len; i++) {
        if(isNextChar(p[i], p[i-1])) count++
        else count = 1
        const temp = p[i].charCodeAt(0) - 97
        dp[temp] =  Math.max(dp[temp], count)
    }

    if(len === 1) return 1
    let sum = 0
    for(let i = 0; i < dp.length; i++) sum += dp[i]
    return sum
}

function isNextChar(a, b) {
    const charCodea = a.charCodeAt(0) - 97
    const charCodeb = b.charCodeAt(0) - 97

    return (charCodeb !== 25 && charCodea === charCodeb + 1) || (charCodeb === 25 && charCodea === 0)
}