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