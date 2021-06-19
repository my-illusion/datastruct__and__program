// 输入：s = "Alice does not even like bob"
// 输出："bob like even not does Alice"

function reverseWords(s) {
    const len = s.length
    if(len < 2) return s
    let prev = ''
    let curIndex = 0
    let result = ''
    let temp = ''

    while(curIndex < len) {
        if(s[curIndex] !== ' ') {
            if(prev !== ' '){
                temp += s[curIndex]
            }else{
                temp = s[curIndex]
            }
        }else{
            if(prev !== ' ') {
                result = temp + ' ' + result
                temp = ' '
            }
        } 
        prev = s[curIndex]
        curIndex++
    }

    if(temp !== ' ') {
        result = temp + ' ' + result
    }

    return result
}

console.log(
    reverseWords(
        "the sky is blue"
    )
)