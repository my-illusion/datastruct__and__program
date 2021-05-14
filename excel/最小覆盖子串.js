function minWindow(s, t) {
    const window = new Map()
    const len = s.length
    let left = 0,
        right = 0;
    let res = ''

    for(const ch of t) {
        window.set(ch, window.has(ch) ? window.get(ch) + 1 : 1)
    }

    let need = window.size

    while(right < len) {
        if(window.has(s[right])) {
            window.set(s[right], window.get(s[right]) - 1)
            if(window.get(s[right]) === 0) need -= 1
        }

        while(need === 0) {
            const newRes = s.substring(left, right + 1)
            console.log(newRes)
            if(!res || newRes.length < res.length) res = newRes
            
            if(window.has(s[left])) {
                window.set(s[left], window.get(s[left]) + 1)
                if(window.get(s[left]) === 1) need += 1
            }

            left++
        }
        right++
    }

    return res
}

console.log(
    minWindow(
        "aaaaaaaaaaaabbbbbcdd",
        "abcdd"
    )
)