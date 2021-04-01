/**
 * 给定 正整数 n， 生成一系列合法的括号的组合
 */

 function findAll(n) {
    if(n === 1) return ['()']
    if(n < 1) return []
    
    const result = []
    dfs(n, n, '', result, n)
    return result
 }

 function dfs(leftMain, rightMain, str, result, n) {
    if(leftMain === 0 && rightMain === 0) {
        result.push(str)
        return
    }

    // 尽可能的先找左括号
    if(leftMain > 0) {
        dfs(leftMain - 1, rightMain, str + '(', result, n)
    }

    if(leftMain < rightMain) {
        dfs(leftMain, rightMain - 1, str + ')', result, n)
    }
 }

 console.log(findAll(2))