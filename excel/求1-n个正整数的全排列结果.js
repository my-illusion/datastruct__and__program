function allRank(n) {
    if(n < 1) return []
    const arr = new Array(n).fill(undefined).map((_, i) => i + 1 )
    const result = []
    dfs(arr, 0, result)
    console.log(result)
}

function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function dfs(arr, n, result) {
    if(n >= arr.length - 1) {
        result.push(arr.join(','))
    }else{
        for(let i = n; i < arr.length; i++) {
            swap(arr, n, i)
            dfs(arr, n + 1, result)
            swap(arr, n, i)
        }
    }
}

allRank(1)