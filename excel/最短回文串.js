/**
 * s1' + s2
 */

 function shortestPalindrome(s) {
    const len = s.length()
    const next = new Array(len).fill(0)
    let j = -1
    next[0] = j
    for(let i = 1; i < len; i++) {
        while(j >= 0 && s[i] !== s[j + 1]) j = next[j]
        if(s[i] === s[j + 1]) j++
        next[i] = j
    }

    let index = -1
    for(let i = len - 1; i >= 0; i--) {
        while(index >= 0 && s[i] !== s[index + 1]) {
            index = next[index]
        }
        if(s[i] === s[index + 1]) index++
    }

    const add = index === len - 1 ? '' : s.slice(index + 1)
    return add.split('').reverse().join('') + s
 }