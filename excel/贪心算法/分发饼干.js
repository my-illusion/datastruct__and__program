function findContentChildren(g, s) {
    let index = s.length
    let result = 0
    for(let i = g.length - 1; i >= 0; i--) {
        if(index >= 0 && s[index] >= g[i]){
            result++
            index--
        }
    }
    return result
}