// 无重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。

// 示例1:

//  输入：S = "qwe"
//  输出：["qwe", "qew", "wqe", "weq", "ewq", "eqw"]
// 示例2:

//  输入：S = "ab"
//  输出：["ab", "ba"]

function permutation(S){
    const path = []
    const result = []
    backtracking(S, 0, path, result)
    return result
}

function backtracking(S, startIndex, path, result) {
    if(path.length === S.length) {
        result.push(path.join(""))
        return
    }

    for(let i = startIndex; i < S.length; i++) {
        path.push(S[i])
        backtracking(S, i + 1, path, result)
        path.pop(S[i])
    }
}