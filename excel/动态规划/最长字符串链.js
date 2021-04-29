// 给出一个单词列表，其中每个单词都由小写英文字母组成。

// 如果我们可以在 word1 的任何地方添加一个字母使其变成 word2，那么我们认为 word1 是 word2 的前身。例如，"abc" 是 "abac" 的前身。

// 词链是单词 [word_1, word_2, ..., word_k] 组成的序列，k >= 1，其中 word_1 是 word_2 的前身，word_2 是 word_3 的前身，依此类推。

// 从给定单词列表 words 中选择单词组成词链，返回词链的最长可能长度。
//  

// 示例：

// 输入：["a","b","ba","bca","bda","bdca"]
// 输出：4
// 解释：最长单词链之一为 "a","ba","bda","bdca"。
//  

// 提示：

// 1 <= words.length <= 1000
// 1 <= words[i].length <= 16
// words[i] 仅由小写英文字母组成。

// 首先动态规划一定要有一个遍历顺序，这道题目乍看没有。。不如先排个序？
// 按照字符串长度从小到大排序
// 然后有一个问题就是怎么判断 一个字符串是另外一个字符串的前身呢？
// 我们反其道而行之 既然是通过添加进行的字符串转化 那我们就通过任意位置删除一个字符来判断是否就是前身
// ok 下边就是递推公式了
// dp[i]表示以i结尾的最长字符串链的长度
// dp[i] = dp[j] + 1 if words[j] 是 words[i] 的前身
function longestStrChain(words) {
    words.sort((a, b) => a.length - b.length)
    const len = words.length
    const dp = new Array(len).fill(1)

    let maxLength = 1

    for(let i = 0; i < len; i++) {
        for(let j = i - 1; j >= 0; j--) {
            if(isPrefix(words[i], words[j])){
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        if(maxLength < dp[i]) {
            maxLength = dp[i]
        }
    }

    return maxLength
}

function isPrefix(a, b) {
    const temp = a.split("")
    for(let i = 0; i < len; i++) {
        const deleteStr = temp.concat().splice(i, 1).join("")
        if(deleteStr === b) return true
    }
    return false
}