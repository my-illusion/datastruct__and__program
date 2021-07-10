function longestCommonPrefix(strs) {
    const len = strs.length
    if(len === 1) return strs[0]
    if(len === 0) return ''
    let common = findCommonPrefixBetween(strs[0], strs[1])
    for(let i = 2; i < len; i++) {
        common = findCommonPrefixBetween(common, strs[i])
        if(!common) return ''
    }
    return common
}

function findCommonPrefixBetween(str1, str2) {
    let s = ''
    let i = 0
    while(i < str1.length && i < str2.length && str1[i] === str2[i]) s+=str1[i]
    return s
}