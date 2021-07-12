// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
function lengthOfLongestSubstring(s) {
    let max = 0
    let slow = 0
    let fast = 0
    const hashSet = new Set()
    while(fast < s.length) {
        if(hashSet.has(s[fast])) {
            while(hashSet.has(s[fast])) {
                hashSet.delete(s[slow])
                slow++
            }
        }
        if(fast - slow + 1 > max) max = fast - slow + 1
        
        hashSet.add(s[fast])
        fast++
    }
    return max
}
