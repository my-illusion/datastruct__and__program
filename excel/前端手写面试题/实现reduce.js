function reduce(arr, fn, first) {
    let num1
    let i
    if(!first) {
        // 如果第一个参数没有提供
        num1 = arr[0]
        i = 1
    }else{
        num1 = first
        i = 0
    }

    for(; i < arr.length; i++) {
        num1 = fn(num1, arr[i], i, arr)
    }
    return num1
}


console.log(
    reduce([1, 2, 3], (a, b) => a + b, 0)
)