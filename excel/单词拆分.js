// 给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

// 说明：

// 拆分时可以重复使用字典中的单词。
// 你可以假设字典中没有重复的单词

// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。

// 输入: s = "applepenapple", wordDict = ["apple", "pen"]
// 输出: true
// 解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
//      注意你可以重复使用字典中的单词。

/**
 * 可以重复 刚好可以拆分组成 可以看出这是一个完全背包问题的应用
 * 1、确认动态规划下标含义
 *    --- dp[i] 表示 长度为 i的字符串是否可以由字典中的 字符串 拼接得到
 * 2、确定递推公式
 *    --- 如果dp[j] 为 true 且 j...i的字符串出现在了字典中 那么dp[i]也为true
 * 
 */
function wordBreak(s, wordDict) {
    const len = s.length
    const dp = new Array(len + 1).fill(0)
    dp[0] = true
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < i; j++) {
            if(dp[j] && wordDict.includes(s.slice(j, i + 1))){
                dp[i] = true;
                break;
            }
        }
    }
    return dp[len - 1]
}