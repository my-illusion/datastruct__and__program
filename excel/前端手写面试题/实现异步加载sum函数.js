function add(a, b) {
    console.log('执行加载...')
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}

// function sum(arr) {
//     // 只使用add函数实现异步的相加
//     let p = Promise.resolve(0)
//     for(let i = 0, len = arr.length; i < len; i++) {
//         p = p.then(a => {
//             return add(a, arr[i])
//         })
//     }

//     return p
// }

// sum(
//     [1, 2, 3]
// ).then(result => {
//     console.log(result)
// })


// function sum(arr) {
//     const len = arr.length
//     if(!len) return 0
//     if(len === 1) return arr[0]

//     let p = Promise.resolve(0)
//     for(let i = 0; i < len; i++) {
//         p = p.then(prev => add(prev, arr[i]))
//     }

//     return p
// }

// 并发限制为3 上边的加载效率很慢 是因为每次只计算一个的 我们可以把数组拆分为多个两个数字相加的结果

async function sum(arr, limit = 3) {
    if(arr.length === 1) return arr[0]

    const result = []
    let i
    for(i = 0; i < arr.length - 1; i += 2) {
        result.push(
            add(arr[i], arr[i+1])
        ) 
    }

    if(arr.length % 2) result.push(arr[arr.length - 1])

    return sum(await Promise.all(result), limit)
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
sum(
    arr
).then(result => {
    console.log(result)
})


// async function sum(arr) {
//     let result = 0
    
//     const obj = {}
//     obj.toString = function() {
//         return result
//     } 

//     const promises = []

//     for(let i = 0; i < arr.length; i++) {
//         promises.push(
//             add(obj, arr[i]).then(res => result = res)
//         )
//     }

//     await Promise.all(promises)

//     return result
// }

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
sum(
    arr
).then(result => {
    console.log(result)
})
