Promise.allSettled = function(promises) {
    if(!Array.isArray(promises)) {
        throw new TypeError('传入的参数必须是一个数组~')
    }

    return new Promise((resolve, reject) => {
        const result = [...promises]

        let len = result.length

        const compute = () => {
            len--
            if(len === 0) {
                resolve(result)
            }
        }

        const resolvePromise = (promise, index) => {
            if(promises instanceof Promise) {
                const then = promise.then
                then.call(promise, 
                    (value) => {
                        result[index] = {status: 'fullfilled', value}
                        compute()
                    },
                    (error) => {
                        result[index] = {status: 'rejected', reason: error}
                        compute()
                    })
            }else{
                result[index] = { status: 'fullfilled', value: promise }
                compute()
            }
        }

        for(let i = 0; i < promises.length; i++) {
            resolvePromise(promises[i], i)
        }
    })
}