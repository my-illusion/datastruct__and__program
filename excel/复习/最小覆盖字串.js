function minWindow(s, t) {
    if(s.length < t.length) return ''

    let left = 0
    let right = 0

    const window = new Map()

    for(const char of t){
        if(window.has(char)) {
            window.set(char, window.get(char) + 1)
        }else{
            window.set(char, 1)
        }
    }

    let need = window.size

    let res = ''
    while(right < s.length) {
        const key = s[right]
        if(window.has(key)) {
            window.set(key, window.get(key) - 1)
            if(window.get(key) === 0) {
                need--
            }
        }

        while(need === 0) {
            const temp = s.substring(left, right + 1)
            if(!res || res.length > temp.length) res = temp
            if(window.has(s[left])) {
                window.set(s[left], window.get(s[left]) + 1)
                if(window.get(s[left]) === 1) {
                    need++
                }
            }
            left++
        }
        right++
    }
    return res
}




function minWindow(s, t) {
    const lenS = s.length
    const lenT = t.length

    if(lenS < lenT) return ""

    const window = new Map()

    for(const char of t) {
        if(!window.has(char)) {
            window.set(char, 1)
        }else{
            window.set(char, window.get(char) + 1)
        }
    }

    let need = window.size

    let left = 0
    let right = 0

    let res = ''

    while(right < s.length) {
        const char = s[right]
        if(window.has(char)) {
            window.set(char, window.get(char) - 1)
            if(window.get(char) === 0) {
                need--
            }
        }

        while(need === 0) {
            if(!res || right - left + 1 > res.length) res = s.substring(left, right + 1)
            if(window.has(s[left])) {
                window.set(s[left], window.get(s[left]) + 1)
                if(window.get(s[left]) === 1) {
                    need++
                }
            }
            left++
        }
        right++
    }
    return res
}