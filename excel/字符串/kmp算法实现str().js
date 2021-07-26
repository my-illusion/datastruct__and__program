function strStr(haystack, needle) {
    if(!needle.length || !haystack.length) return -1
    // 首先求解 next 数组
    const next = getNext(needle)

    let j = -1
    for(let i = 0; i < haystack.length; i++) {
        while(j >= 0 && haystack[i] !== needle[j + 1]) j = next[j]

        if(haystack[i] === needle[j+1]) j++

        if(j === needle.length - 1) {
            return i - needle.length + 1
        }
    }
    return -1
}

function getNext(s) {
    const len = s.length
    let j = -1
    const next = new Array(len).fill(0)
    next[0] = j

    for(let i = 1; i < len; i++) {
        while( j >= 0 && s[i] !== s[j + 1]) j = next[j]
        if(s[i] === s[j + 1]) j++
        next[i] = j
    }

    return next
}

// console.log(
//     strStr('aabac', 'ba')
// )

console.log(
    getNext('bb')
)