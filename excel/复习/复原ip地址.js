function restoreIpAddresses(s) {
    const len = s.length
    if(len < 4) return []

    const result = []

    backtracking(s, 0, [], result)

    return result
}

function backtracking(s, start, path, result){
    if(s.length > 4) return

    if(start === s.length) {
        if(path.length === 4) {
            result.push(path.concat())
        }

        return
    }

    let index = start + 1
    while(index <= s.length && isValidIPFormate( s.substring(start, index) )) {
        backtracking(s, index, path.concat( s.substring(start, index) ), result)
        index++
    }
}

function isValidIPFormate(s) {
    if(!s.length) return false
    if(s.length === 1) return true
    if(s[0] === '0') return false

    return parseInt(s, 10) >= 0 && parseInt(s, 10) <= 255
}