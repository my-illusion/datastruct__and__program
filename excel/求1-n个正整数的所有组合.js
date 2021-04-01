function allCompose(n) {
    if(n < 1) return []
    const arr = new Array(n).fill(undefined).map((_, i) => i + 1 )
    const result = []
    const path = []

    helpers(arr, 0, 3, path, result)
    console.log(result)
}

/**
 * 求解n个字符的长度为m的组合的问题
 * 可以分解为 求解 n-1个字符长度为m-1的组合 和 求n-1个字符长度为m的组合
 * @param {*} n 
 * @param {*} m 
 */
function helpers(arr, current,  m, path, result) {
    if(m === 0) {
        result.push(path.join(','))
        return
    }

    if(current > arr.length - 1) return

    path.push(arr[current])
    helpers(arr, current + 1, m - 1, path, result)

    path.pop(arr[current])
    helpers(arr, current + 1, m, path, result)
}

allCompose(4)