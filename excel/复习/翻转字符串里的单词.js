function reverseWords(s) {
    const len = s.length

    if(len < 2) return s

    let result = ""
    let temp = ''
    s = s.trim()
    for(let i = 0, len = s.length; i < len; i++)  {
        if(s[i] !== ' ') {
            temp += s[i]
        }else{
            if(temp !== '') {
                result = (temp + ' ' + result).trim()
                temp  = ''
            }
        }
    }

    if(temp) {
        result = (temp + ' ' + result).trim()
    }
    return result
}