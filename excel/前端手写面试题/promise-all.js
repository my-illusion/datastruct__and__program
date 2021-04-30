Promise.__proto__.myAll = function(arr) {
    const len = arr.length
    if(len < 1) return Promise.resolve()

    return new Promise((resolve, reject) => {
        const result = []
        let current = 0
        for(let i = 0; i < len; i++) {
            Promose.resolve(arr[i])
                .then(res => {
                    result[i] = res
                    current++
                    if(current === len) {
                        resolve(result)
                    }
                })
                .catch((err) => reject(err))
        }
    })
}

function handler(index, timeout) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(index)
        }, timeout)
    })
}

console.log(Promise.myAll)

Promise.myAll(
    [
        handler(1, 100),
        handler(2, 400),
        handler(3, 200)
    ]
)
    .then(res => {
        console.log(res)
    })