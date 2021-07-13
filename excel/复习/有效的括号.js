const left = ['[', '{', '(']
const right  = [']', '}', ')']
function isValid(s) {
    const len = s.length
    if(len === 1) return false

    const stack = []

    for(let i = 0; i < len; i++) {
        if(left.includes(s[i])) {
            stack.push( s[i] )
        }else{
            if(!stack.length) return false
            const top = stack[stack.length - 1]

            if(s[i] === ')' && top !== '(') return false
            if(s[i] === ']' && top !== '[') return false
            if(s[i] === '}' && top !== '{') return false

            stack.pop()
        }
    }

    return  stack.length ? false : true 
}