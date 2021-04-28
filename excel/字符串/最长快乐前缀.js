function longestPrefix(s) {
    const len = s.length
    let j = -1

    const next = new Array(len).fill(0)
    next[0] = j

    for(let i = 1; i < len; i++) {
        while(j >= 0 && s[i] !== s[j+1]) j = next[j]
        if(s[i] === s[j+1]) j++
        next[i] = j
    }

    const index = next[len - 1] + 1
    return s.slice(0, index)
}

longestPrefix('leve')
