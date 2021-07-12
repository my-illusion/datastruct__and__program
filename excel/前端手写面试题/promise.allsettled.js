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
Promise.allSettled = function(promises) {
    promises = Array.isArray(promises) ? promises : []
    let len = promises.length
    
    return new Promise((resolve, reject) => {
        if(!len) {
            resolve([])
            return
        }
        const args = [...promises]
        const computed = () => {
            while(--len === 0) {
                resolve(args)
            }
        } 

        const resolvePromise = (promise, index) => {
            if(promise instanceof Promise) {
                const then = promise.then
                then.call(promise, 
                    (value) => {
                        args[index] = { success: true, value: value }
                        computed()
                    },
                    (error) => {
                        args[index] = { success: false, value: error }
                        computed()
                    }
                )
            }else{
                args[index] = { success: true, value: promise }
                computed()
            }
        }

        for(let i = 0; i < args.length; i++) {
            resolvePromise(args[i], index)
        }
    })
}