function longestCommonPrefix(strs) {
    let  maxPrev = ""
    const len = strs.length
    if(!len) return ""
    if(len === 1) return  strs[0]

    maxPrev = getCommon(strs[0], strs[1])

    for(let i = 2; i < len; i++) {
        maxPrev = getCommon(maxPrev, strs[i])
        if(!maxPrev) return ""
    }
    return maxPrev
}

function getCommon(st1, st2) {
    const len1 = st1.length
    const len2 = st2.length

    if(!len1 || !len2) return ""
    let index = 0
    while(index < len1 && index < len2 && st1[index] === st2[index]) index++
    return st1.substring(0, index)
}

console.log(
    longestCommonPrefix(
        ["flower","flower","flower","flower"]
    )
)