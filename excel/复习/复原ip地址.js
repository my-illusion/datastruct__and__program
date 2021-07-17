function restoreIpAddresses(s) {
    const result = []
    const path = []
    backtracking(s, 0, path, result)
    return result
}

function backtracking(s, start, path, result) {
    if(path.length > 4) return

    if(start === s.length) {
        if(path.length === 4) {
            result.push(path.join("."))
        }
        return
    }

    let index = start + 1
    while(index <= s.length && isValidIPFormate(s.substring(start, index))) {
        backtracking(s, index, path.concat(s.substring(start, index)), result)
        index++
    }
}

function isValidIPFormate(s) {
    if(!s) return false
    if(s.length === 1) return true
    return s[0] !== '0' && parseInt(s, 10) >= 0 && parseInt(s, 10) <= 255
}