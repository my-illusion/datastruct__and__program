const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function Promise(excutor) {
    let that = this
    this.value = undefined
    this.reason = undefined
    this.status = PENDING
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    function resolve(value) {
        if(value instanceof Promise) {
            return value.then(resolve, reject)
        }

        setTimeout(() => {
            if(that.status === PENDING) {
                that.status = FULFILLED
                that.value = value
                that.onFulfilledCallbacks.forEach(cb => cb(that.value))
            }
        })
    }

    function reject(reason) {
        setTimeout(() => {
            if (that.status === PENDING) {
                that.status = REJECTED;
                that.reason = reason;
                that.onRejectedCallbacks.forEach(cb => cb(that.reason));
            }
        });
    }

    try{
        excutor(resolve, reject)
    }catch(err) {
        reject(err)
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    const that = this

    let newPromise

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value

    onRejected = typeof onRejected === 'function' ? onRejected : err => {
        throw err
    } 

    if(that.status === FULFILLED) {
        return newPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try{
                    let x = onFulfilled(that.value)
                    resolve(x)
                }catch(err) {
                    reject(err)
                }
            })
        })
    }

    if(that.status === REJECTED) {
        return newPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try{
                    let x = onRejected(that.reason)
                    resolve(x)
                }catch(err) {
                    reject(err)
                }
            })
        })
    }

    if(that.status === PENDING) {
        return newPromise = new Promise((resolve, reject) => {
            that.onFulfilledCallbacks.push((value) => {
                try {
                    let x = onFulfilled(value);
                    resolve(x)
                } catch(e) {
                    reject(e);
                }
            });
            that.onRejectedCallbacks.push((reason) => {
                try {
                    let x = onRejected(reason);
                    resolve(x)
                } catch(e) {
                    reject(e);
                }
            });
        })
    }
}

new Promise((resolve) => resolve(1))
    .then(r1 => {
        console.log(r1)
        return 2
    })
    .then(r2 => {
        console.log(r2)
    })