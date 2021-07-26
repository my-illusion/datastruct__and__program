const PENDING = 'pending'
const FULLFILLED = 'fullfilled'
const REJECTED = 'rejected'

function Promise(excutor) {
    const that = this
    this.value = undefined
    this.reason = undefined
    this.status = PENDING
    this.onFullfilledCallbacks = []
    this.onRejectedCallbacks = []

    function resolve(value) {
        if(value instanceof Promise){
            return value.then(resolve, reject)
        }

        if(that.status === PENDING) {
            setTimeout(() => {
                that.value = value
                that.status = FULLFILLED
                that.onFullfilledCallbacks.forEach(fn => fn(value))
            })
        }
    }

    function reject(err) {
        if(that.status === PENDING) {
            setTimeout(() => {
                that.reason = err
                that.status = REJECTED
                that.onRejectedCallbacks.forEach(fn => fn(err))
            })
        }
    }

    try {
        excutor(resolve, reject)
    }catch(err) {
        reject(err)
    }
}

Promise.prototype.then = function (onFullfilled, onRejected) {
    onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : (value) => value
    
    onRejected = typeof onRejected === 'function' ? onRejected : err => {
        throw new Error(err)
    }

    const that = this

    if(that.status === FULLFILLED) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const x = onFullfilled(that.value)
                    resolve(x)
                }catch(err) {
                    reject(err)
                }
            })
        })
    }else if(that.status === REJECTED) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const x = onRejected(that.value)
                    resolve(x)
                }catch(err) {
                    reject(err)
                }
            })
        })
    }else{
        return new Promise((resolve, reject) => {
            that.onFullfilledCallbacks.push((value) => {
                try{
                    const x = onFullfilled(value)
                    resolve(x)
                }catch(err) {
                    reject(err)
                }
            })
            that.onRejectedCallbacks.push((reason) => {
                try{
                    const x = onRejected(reason)
                    resolve(x)
                }catch(err) {
                    reject(err)
                }
            })
        })
    }
}

// new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(1)
//     }, 1000)
// })
// .then(result => {
//     console.log(result)
// })

Promise.resolve = function(value) {
    if(value instanceof Promise) {
        return value
    }

    return new Promise(resolve => resolve(value))
}

Promise.reject = function(reason) {
    return new Promise((_, reject) => reject(reason))
}

Promise.all = function (promises) {
    if(!Array.isArray(promises)) {
        return Promise.reject('传入的参数必须是数组类型')
    }

    if(promises.length < 1) return Promise.resolve([])

    return new Promise((resolve, reject) => {
        let count = promises.length
        const result = []
        const computed = () => {
            count--
            if(count === 0) {
                resolve(result)
            }
        }
        for(let i = 0, len = promises.length; i < len; i++) {
            Promise.resolve(promises[i]).then(
                (value) => {
                    result[i] = value
                    computed()
                },
                err => {
                    reject(err)
                }
            )
        }
    })
}

function createPromise(timeout, value) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout, value)
    })
}

// Promise.all(

// ).then(result => {
//     console.log(result)
// })



Promise.race = function(promises) {
    
}