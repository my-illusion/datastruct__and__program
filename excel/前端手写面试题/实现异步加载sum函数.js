function add(a, b) {
    return Promise.resolve(a + b)
}

function sum(arr) {
    // 只使用add函数实现异步的相加
    let p = Promise.resolve(0)
    for(let i = 0, len = arr.length; i < len; i++) {
        p = p.then(a => {
            return add(a, arr[i])
        })
    }

    return p
}

sum(
    [1, 2, 3]
).then(result => {
    console.log(result)
})

